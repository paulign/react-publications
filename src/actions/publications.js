import firebase from '../firebaseConfig';
import { success as successNotification, error as errorNotification } from 'react-notification-system-redux';
import { CREATE_PUBLICATION_STOP, CREATE_PUBLICATION_START, UPLOAD_IMAGE_PROGRESS, CHANGE_PUBLICATION_FORM } from "./types";

export const onChangePublicationForm = (data = {}) => ({
    type: CHANGE_PUBLICATION_FORM, payload: data
});

export const createPublication = () => async (dispatch, getState) => {
    try {
        const { text, image } = getState().publications;
        if (text) {
            dispatch(startCreate());

            const db = firebase.database();
            const ref = db.ref('publications').push();
            const id = ref.key;
            const created_at = firebase.database.ServerValue.TIMESTAMP;

            const onSuccess = async (url = null) => {
                try {
                    await ref.set({ text, id, image: url, created_at });
                    dispatch(stopCreate());
                    dispatch(successNotification({ title: 'Success', message: 'Publication was successfully created!' }));
                } catch (error) {
                    handleCreatePublicationError(error, dispatch);
                }
            }

            if (image) {
                uploadImage({ id, image: image.file, onSuccess, onError: handleCreatePublicationError, dispatch });
            } else {
                onSuccess();
            }
        }
    } catch (error) {
        handleCreatePublicationError(error, dispatch);
    }
}

const startCreate = () => ({ type: CREATE_PUBLICATION_START });
const stopCreate = () => ({ type: CREATE_PUBLICATION_STOP });
const uploadProgress = (progress) => ({ type: UPLOAD_IMAGE_PROGRESS, payload: progress });

const uploadImage = ({ image, id, onSuccess, onError, dispatch }) => {
    try {
        const storageRef = firebase.storage().ref('images');
        const metadata = {
            contentType: image.type
        }

        const uploadTask = storageRef.child(`${id}_${image.name}`).put(image, metadata);

        uploadTask.on('state_changed',
            function (snapshot) {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                dispatch(uploadProgress(progress));
            }, function (error) {
                onError(error, dispatch)
            }, async function () {
                try {
                    const url = await uploadTask.snapshot.ref.getDownloadURL();
                    onSuccess(url);
                } catch (error) {
                    onError(error, dispatch);
                }
            });
    } catch (error) {
        onError(error, dispatch);
    }
}

const handleCreatePublicationError = (error, dispatch) => {
    console.log(error);
    if (dispatch) {
        dispatch(stopCreate());
        dispatch(errorNotification({ title: 'error', message: error.message }));
    }
}

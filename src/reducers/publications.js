import {
    CREATE_PUBLICATION_START,
    CREATE_PUBLICATION_STOP,
    UPLOAD_IMAGE_PROGRESS,
    CHANGE_PUBLICATION_FORM
} from '../actions/types';

const INITIAL_STATE = {
    isCreating: false,
    uploadProgress: 0,
    image: null,
    text: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_PUBLICATION_FORM:
            const { field, value } = action.payload;
            return {
                ...state,
                [field]: value
            }
        case CREATE_PUBLICATION_START:
            return {
                ...state,
                isCreating: true,
                uploadProgress: 0
            }
        case CREATE_PUBLICATION_STOP:
            return {
                ...state,
                ...INITIAL_STATE
            }
        case UPLOAD_IMAGE_PROGRESS:
            return {
                ...state,
                uploadProgress: action.payload
            }
        default:
            return state;
    }
};
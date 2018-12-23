import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Dropzone from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ImageUpload extends Component {
    render() {
        const { image, onDropImage, onRemoveImage } = this.props;
        return (
            <Dropzone onDrop={onDropImage} accept="image/*">
                {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => (
                    <div {...getRootProps()}
                        className={`dropzone d-flex flex-column align-items-center justify-content-center${
                            isDragAccept ? ' accepted' : ''
                            }${
                            isDragReject ? ' rejected' : ''
                            }${
                            isDragActive ? ' active' : ''
                            }`
                        }
                    >
                        <input {...getInputProps()} />
                        {!image ? ([
                            <FontAwesomeIcon key="icon" className="text-info" size="2x" icon="cloud-upload-alt" />,
                            <span key="text">{!isDragActive ? 'Drag' : 'Drop'} image here...</span>
                        ]) : (
                                <div className="preview-wrapper">
                                    <Button onClick={onRemoveImage} close />
                                    <img src={image.preview} alt="" />
                                </div>
                            )}
                    </div>
                )}
            </Dropzone>
        )
    }
}
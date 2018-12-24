import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, FormGroup, Label, Input, Row, Col, Button, Progress } from 'reactstrap';
import ImageUpload from '../components/ImageUpload';
import { createPublication, onChangePublicationForm } from '../actions';

class CreatePublication extends Component {
    onChangeText = (e) => {
        this.props.onChangePublicationForm({ field: 'text', value: e.target.value });
    }

    onDropImage = (files) => {
        const image = { file: files[0], preview: URL.createObjectURL(files[0]) };
        this.props.onChangePublicationForm({ field: 'image', value: image });
    }

    onRemoveImage = (e) => {
        e.stopPropagation();
        this.props.onChangePublicationForm({ field: 'image', value: null });
    }

    onCreate = () => {
        this.props.createPublication();
    }

    render() {
        const { isCreating, uploadProgress, image, text } = this.props;
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <FormGroup>
                            <Label>Publication text</Label>
                            <Input value={text} onChange={this.onChangeText} placeholder="Type publication text" type="textarea" rows={5} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Publication image</Label>
                            <ImageUpload
                                image={image}
                                onDropImage={this.onDropImage}
                                onRemoveImage={this.onRemoveImage}
                            />
                        </FormGroup>
                        <Button color="primary" disabled={!text || !!isCreating} onClick={this.onCreate} size="lg">Publish</Button>
                        {!!isCreating && !!image && (
                            <div>
                                <div className="text-center">Uploading image: {parseInt(uploadProgress)}%</div>
                                <Progress animated color={uploadProgress < 100 ? 'primary' : 'success'} value={uploadProgress} />
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.publications
});

export default connect(mapStateToProps, { createPublication, onChangePublicationForm })(CreatePublication);
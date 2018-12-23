import React, { Component } from 'react';
import { connect } from 'react-redux';
import { success } from 'react-notification-system-redux';
import { Container, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import ImageUpload from '../components/ImageUpload';

class CreatePublication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: null,
            text: ''
        };
    }

    onChangeText = (e) => {
        this.setState({ text: e.target.value });
    }

    onDropImage = (files) => {
        console.log(files);
        const image = { file: files[0], preview: URL.createObjectURL(files[0]) };
        console.log(image);
        this.setState({ image });
    }

    onRemoveImage = (e) => {
        e.stopPropagation();
        this.setState({ image: null });
    }

    render() {
        const { image, text } = this.state;

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <FormGroup>
                            <Label>Publication text</Label>
                            <Input value={text} onChange={this.onChangeText} type="textarea" rows={5} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Publication image</Label>
                            <ImageUpload
                                image={image}
                                onDropImage={this.onDropImage}
                                onRemoveImage={this.onRemoveImage}
                            />
                        </FormGroup>
                        <Button color="primary" onClick={() => this.props.success({ title: 'Success', message: 'Publication was successfully created!' })} size="lg">Publish</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { success })(CreatePublication);
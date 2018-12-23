import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PublicationCard = ({ text, published_at, image }) => {
    return (
        <a href="javascript:void(0);" className="publication-card">
            <Row>
                <Col className="mb-2 mb-md-0" md={7}>
                    <strong className="mr-2 d-md-none">Text:</strong> {text}
                </Col>
                <Col className="mb-2 mb-md-0" md={3}>
                    <strong className="mr-2 d-md-none">Published at:</strong> {published_at}
                </Col>
                <Col className="mb-2 mb-md-0" md={2}>
                    <strong className="mr-2 d-md-none">Image:</strong>
                    {!image ?
                        <FontAwesomeIcon className="text-danger" icon="times-circle" /> :
                        <FontAwesomeIcon className="text-success" icon="check-circle" />}
                </Col>
            </Row>
        </a>
    )
}

export default PublicationCard;
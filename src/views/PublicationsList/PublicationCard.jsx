import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PublicationCard = ({ text, created_at, image, id }) => {
    return (
        <Link to={`/publications/${id}`} className="publication-card">
            <Row>
                <Col className="mb-2 mb-md-0 publication-text" md={7}>
                    <strong className="mr-2 d-md-none">Text:</strong> {text}
                </Col>
                <Col className="mb-2 mb-md-0" md={3}>
                    <strong className="mr-2 d-md-none">Created at:</strong> {moment(created_at).format('DD/MM/YYYY HH:mm')}
                </Col>
                <Col className="mb-2 mb-md-0" md={2}>
                    <strong className="mr-2 d-md-none">Image:</strong>
                    {!image ?
                        <FontAwesomeIcon className="text-danger" icon="times-circle" /> :
                        <FontAwesomeIcon className="text-success" icon="check-circle" />}
                </Col>
            </Row>
        </Link>
    )
}

export default PublicationCard;
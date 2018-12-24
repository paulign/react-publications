import React from 'react';
import { Row, Col } from 'reactstrap';

const PublicationsTableHeader = () => (
    <div className="publications-header">
        <Row className="d-none d-md-flex">
            <Col md={7}>
                Text
            </Col>
            <Col md={3}>
                Created at
            </Col>
            <Col md={2}>
                Image
            </Col>
        </Row>
    </div>
);

export default PublicationsTableHeader;
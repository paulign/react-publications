import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PublicationCard from './PublicationCard';

class PublicationsList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Container className="publications-list">
                <h2>Publications list</h2>
                <div className="publications-header">
                    <Row className="d-none d-md-flex">
                        <Col md={7}>
                            Text
                        </Col>
                        <Col md={3}>
                            Published at
                        </Col>
                        <Col md={2}>
                            Image
                        </Col>
                    </Row>
                </div>
                <PublicationCard text="tessdjj sdsl ksldk sldlkd lskd slkd skld" image published_at="20/12/2018 18:30" />
                <PublicationCard text="tessdjj sdsl ksldk sldlkd lskd slkd skld" published_at="20/12/2018 18:30" />
                <PublicationCard text="tessdjj sdsl ksldk sldlkd lskd slkd skld" image published_at="20/12/2018 18:30" />
                <PublicationCard text="tessdjj sdsl ksldk sldlkd lskd slkd skld" published_at="20/12/2018 18:30" />
            </Container>
        )
    }
}

export default PublicationsList;
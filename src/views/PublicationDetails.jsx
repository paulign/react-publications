import React, { Component } from 'react';
import firebase from '../firebaseConfig';
import { Container, Row, Col } from 'reactstrap';

class PublicationsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            publication: null,
            isLoading: true,
            currentId: this.getCurrentId()
        };
    }

    getCurrentId = () => {
        let id = null;
        const { match } = this.props;

        if (match.params) {
            id = match.params.id || null;
        }

        return id;
    }

    componentDidMount() {
        this.loadView();
    }

    componentWillUnmount() {
        this.unsubscribeFromRef('publicationRef', this.onLoadPublication);
    }

    unsubscribeFromRef = (key, callback) => {
        if (this[key]) {
            this[key].off('value', callback);
        }
        this[key] = null;
    }

    loadView = () => {
        try {
            const { currentId } = this.state;

            if (currentId) {
                this.unsubscribeFromRef('publicationRef', this.onLoadPublication);
                const db = firebase.database();
                this.publicationRef = db.ref(`publications/${currentId}`);
                this.publicationRef.on('value', this.onLoadPublication);
            } else {
                this.setState({ isLoading: false });
            }

        } catch (error) {
            console.log(error);
            this.setState({ isLoading: false });
        }
    }

    onLoadPublication = async (snapshot) => {
        try {
            const publication = snapshot.val();
            await this.setState({ publication, isLoading: false });
        } catch (error) {
            console.log(error);
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { publication, isLoading } = this.state;
        return (
            <Container className="publication-details">
                <h2>Publication details</h2>
                {!publication ? (
                    <h4 className="text-center">{isLoading ? 'Loading...' : 'Publication not found'}</h4>
                ) : (
                        <Row>
                            <Col md={!!publication.image ? 8 : 12}>
                                <p>{publication.text}</p>
                            </Col>
                            {!!publication.image && (
                                <Col md={4}>
                                    <img className="img-fluid w-100" src={publication.image} alt="" />
                                </Col>
                            )}
                        </Row>
                    )}
            </Container>
        )
    }
}

export default PublicationsList;
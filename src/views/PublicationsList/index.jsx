import React, { Component } from 'react';
import firebase from '../../firebaseConfig';
import { Container } from 'reactstrap';
import PublicationsTable from './PublicationsTable';

class PublicationsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            publications: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.loadView();
    }

    componentWillUnmount() {
        this.unsubscribeFromRef('listRef', this.onLoadList);
    }

    unsubscribeFromRef = (key, callback) => {
        if (this[key]) {
            this[key].off('value', callback);
        }
        this[key] = null;
    }

    loadView = () => {
        try {
            this.unsubscribeFromRef('listRef', this.onLoadList);
            const db = firebase.database();
            this.listRef = db.ref('publications');
            this.listRef.on('value', this.onLoadList);
        } catch (error) {
            console.log(error);
            this.setState({ isLoading: false });
        }
    }

    onLoadList = async (snapshot) => {
        try {
            const listObj = snapshot.val() || {};
            const publications = Object.values(listObj);
            await this.setState({ publications, isLoading: false });
        } catch (error) {
            console.log(error);
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <Container className="publications-list">
                <h2>Publications list</h2>
                <PublicationsTable {...this.state} />
            </Container>
        )
    }
}

export default PublicationsList;
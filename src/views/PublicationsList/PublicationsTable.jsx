import React from 'react';
import PublicationCard from './PublicationCard';
import PublicationsTableHeader from './PublicationsTableHeader';

const PublicationsTable = ({ publications = [], isLoading = false }) => {
    if (!publications || !publications.length) {
        return (
            <h4 className="text-center">{isLoading ? 'Loading...' : 'No publications yet...'}</h4>
        )
    }

    return (
        <div>
            <PublicationsTableHeader />
            {publications.map(item => (
                <PublicationCard key={item.id} {...item} />
            ))}
        </div>
    )
}

export default PublicationsTable;
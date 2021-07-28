import React from 'react';

export default function CardList ({ title, cards }) {
    console.log(title, cards)
    return (
        /* WDS webpack dev server */
        <div className = {'CardList'}>
            <h1>{title}</h1>
            {/* <Card /> */}
        </div>
    );
}
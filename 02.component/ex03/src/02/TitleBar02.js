import React from 'react';

export default function TitleBar02() {
    let no = 10;
    
    const onClickHeader = (e) => {
        no ++;
        console.log('TitleBar02 click!!')
    }

    return (
        <h1 onClick={ onClickHeader }
        style={ {
            cursor: 'pointer'
        } }>
            ex03 - Function Event Handler(Functional Component)
        </h1>
    )
}
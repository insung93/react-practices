import React from 'react';
import Messages from './data.json';

export default function Guestbook() {
    console.log(Messages);
    return (
        <ul className='Guestbook__List'>
            {Messages.map(message => 

            <li key={message.no} className='Guestbook__List__Item'>
            <strong>{message.name}</strong>
            <p>
                {message.message.split('\n').map(line => {
                    return (<span>{line}<br /></span>)
                })}
            </p>
            <strong>{message.regDate}</strong>
            <a href="#">삭제</a>
        </li>
            
            )}
        </ul>
    )
}
import React from 'react';
import Message from './Message';

export default function MessageList({ messages }) {
    return (
        <ul className="Guestbook__List">
            {  messages.map(message => <Message key={ message.no }
                                                name={ message.name }
                                                message={message.message}/>) }
        </ul>

        
    );
}
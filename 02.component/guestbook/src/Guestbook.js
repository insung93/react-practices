import React from 'react';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';

export default function Guestbook() {
    return (
        <div className='Guestbook'>
            <h1>Guestbook</h1>
            <GuestbookForm />
            <GuestbookList />
        </div>
    )
}
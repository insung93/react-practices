import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
// import data from './assets/json/data.json';

export default function EmaillistApp() {
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(async() => {
        try{
            const response = await fetch('/api', {
                method: 'get',
                mode: 'same-origin',
                header: {
                    'Content-Type': 'application/json'
                },
                body: null
            });
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            setEmails(json.data);
        } catch(e){
            console.err(e);
        }
    }, []); // mount
 
    const notifyKeywordChanged = function(keyword) {
        setKeyword(keyword);    
    }

    return (
        <div className={ 'EmaillistApp' }>
            <SearchBar 
                callback={ notifyKeywordChanged }
                keyword={ keyword } />
            <Emaillist
                emails={ emails }
                keyword={ keyword } />
        </div>
    );
}
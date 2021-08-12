import React, {useEffect } from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import messages from './assets/json/messages.json';

export default function Guestbook() {
    //const [messages, setMessages] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api/message', {
                method:'get',
                headers:{'Content-Type': 'application/json'}
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setCards(json.data);    
        } catch(err){
            console.error(err);
        }
    }, []);

    const notifyTask = {
        add: async function(taskName){
            try {
                console.log('notify task add', taskName);
                const url = `/api/message/task`;
                const task = {
                    no: null,
                    name: taskName,
                    done: false
                }

                const response = await fetch(url, {
                    method:'post',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(task)
                });
    
                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
    
                const json = await response.json();
                if(json.result !== 'success'){
                    throw new Error(`${json.result} ${json.message}`);
                }
                
                const cardIndex = cards.findIndex((card) => card.no === cardNo);
 
                const newCards = update(cards, {
                    [cardIndex]: {
                        tasks: {
                            $push: [json.data]
                        }
                    }
                });

                setCards(newCards);
            } catch(err){
                console.error(err);
            }
        }
    };

    return (
        <div className={ styles.Guestbook }>
            <h1>방명록</h1>
            <WriteForm />
            <MessageList messages={ messages } notifyTask={notifyTask}/>
        </div>
    );
}
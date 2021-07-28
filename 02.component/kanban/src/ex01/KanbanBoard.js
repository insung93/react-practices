import React, { Fragment } from 'react';
import CardList from './CardList';
import cards from './data.json';

export default function KanbanBoard() {
    // console.log(cards);

    // const cardToDo = [];
    // const cardDoing = [];
    // const cardDone = [];
    const cardList = {
        ToDo: [],
        Doing: [],
        Done: []
    };


    // cards.forEach(function(card) {
    //     if(card.status=="ToDo") {
    //         cardToDo.push(card);
    //     } else if (card.status=="Doing") {
    //         cardDoing.push(card);
    //     } else {
    //         cardDone.push(card);
    //     }
    // })

    cards.forEach(function (card) {
        cardList[card.status].push(card);
    });

    return (

        /*
        <div className={'KanbanBoard'}>
            <CardList key='ToDo' title={'ToDo'} cards={cardToDo} />
            <CardList key='Doing' title={'Doing'} cards={cardDoing} />
            <CardList key='Done' title={'Done'} cards={cardDone} />
        </div>
        */

        <div className={'KanbanBoard'}>
            <CardList key='ToDo' title={'ToDo'} cards={cards.filter(card => card.status == 'ToDo')} />
            <CardList key='Doing' title={'Doing'} cards={cards.filter(card => card.status == 'Doing')} />
            <CardList key='Done' title={'Done'} cards={cards.filter(card => card.status == 'Done')} />
        </div>

        /* 
            자식 컴포넌트 끼리 통신 x
            부모랑 자식 간 통신
            부모 - 통신의 Bridge 역할
        */
    );
}
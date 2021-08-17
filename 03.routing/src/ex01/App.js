import React, { Fragment } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Main from './component/Main'
import Gallery from './component/Gallery'
import Guestbook from './component/Guestbook'

export default function () {
    return (
        <HashRouter>
            <Route path='/' component={Main}/>
            {/* exact 정확할때만 */}
            <Route path='/guestbook' component={Guestbook}/>
            <Route path='/gallery' component={Gallery}/>
        </HashRouter>
    );
}


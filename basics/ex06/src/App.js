import React from 'react';
const App =  function () {
    const message = 'Hello World';
    return (
        //component
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App

// export default function () {
//     const app = React.createElement('h1', null, 'Hello World');
//     return app;
// }
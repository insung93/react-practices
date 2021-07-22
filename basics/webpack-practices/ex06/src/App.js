import 'App.scss';

const App = function(){
    const app = document.createElement('h1');
    app.className = 'Header';
    app.innerHTML = '<header class="App-header">' + 
    
    '</header>';
    return app;
}

export { App };
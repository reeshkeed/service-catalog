import React from 'react';
import ReactDOM from 'react-dom';

//JSX
const App = props => <h1>Hello from Client</h1>;

if (document.querySelector('#root')) {
    ReactDOM.render(<App />, document.querySelector('#root'));
}

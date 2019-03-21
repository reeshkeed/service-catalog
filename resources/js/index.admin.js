import React from 'react';
import ReactDOM from 'react-dom';

import Admin from './Admin';

if (document.querySelector('#root')) {
    ReactDOM.render(<Admin />, document.querySelector('#root'));
}

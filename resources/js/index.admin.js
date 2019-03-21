import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { routes } from './routes';

//JSX
const App = props => (
    <Router>
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/categories">Category</Link>
                </li>
            </ul>

            <hr />

            <Switch>
                {routes.map((route, key) => (
                    <Route
                        key={key}
                        exact
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </Switch>
        </>
    </Router>
);

if (document.querySelector('#root')) {
    ReactDOM.render(<App />, document.querySelector('#root'));
}

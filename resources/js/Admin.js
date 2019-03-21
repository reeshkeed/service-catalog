import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './routes';

//JSX
const Admin = props => (
    <Router>
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
    </Router>
);

export default Admin;

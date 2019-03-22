import axios from 'axios';
import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import { routes } from './routes';

//JSX
class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false,
            user: {},
        };
    }

    fetchAuthUser = async token => {
        try {
            const response = await axios('/api/auth/user', {
                method: 'GET',
                params: {
                    auth_token: token.auth_token,
                },
            });

            this.setState({ user: response.data });
        } catch (error) {}
    };

    authenticateUser = async token => {
        if (!token) {
            return;
        }

        await this.fetchAuthUser(token);

        this.setState({
            authenticated: true,
            token,
        });
    };

    render() {
        const { authenticated } = this.state;
        return (
            <Router>
                <Switch>
                    {routes.map((route, key) => (
                        <Route
                            key={key}
                            exact
                            path={route.path}
                            render={componentProps => {
                                if (route.auth) {
                                    if (!authenticated) {
                                        return <Redirect to="/signin" />;
                                    }
                                }

                                if (!route.auth) {
                                    if (authenticated) {
                                        return <Redirect to="/" />;
                                    }
                                }

                                const View = route.component;

                                return (
                                    <View
                                        {...componentProps}
                                        pageProps={{
                                            authenticateUser: this
                                                .authenticateUser,
                                        }}
                                    />
                                );
                            }}
                        />
                    ))}
                </Switch>
            </Router>
        );
    }
}

export default Admin;

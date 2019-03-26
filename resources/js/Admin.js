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
            loading: true,
            authenticated: false,
            token: {},
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

            this.storeAuthToken(JSON.stringify(token));

            this.setState({
                user: response.data,
                authenticated: true,
                loading: false,
                token,
            });
        } catch (error) {
            this.setState({
                authenticated: false,
                loading: false,
            });
        }
    };

    storeAuthToken = tokenString => {
        window.localStorage.setItem('token', tokenString);
    };

    signoutUser = async () => {
        if (!this.state.authenticated) {
            return;
        }

        try {
            await axios.post('/api/auth/signout');

            this.setState({
                authenticated: false,
            });

            window.localStorage.removeItem('token');
        } catch (e) {}
    };

    authenticateUser = async token => {
        if (!token) {
            return;
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${
            token.auth_token
        }`;

        await this.fetchAuthUser(token);
    };

    async componentDidMount() {
        const token = JSON.parse(window.localStorage.getItem('token'));

        await this.authenticateUser(token);
    }

    render() {
        const { authenticated, loading } = this.state;

        if (loading) {
            return '....';
        }

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
                                            signoutUser: this.signoutUser,
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

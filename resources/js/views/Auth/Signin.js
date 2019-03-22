import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { FormHelperText } from '@material-ui/core';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit *
            3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            email: '',
            password: '',
            errors: {},
        };
    }

    handleSigninSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true });

        try {
            const { pageProps } = this.props;
            const { email, password } = this.state;

            const response = await axios('/api/auth/signin', {
                method: 'POST',
                params: {
                    email,
                    password,
                },
            });

            pageProps.authenticateUser(response.data);

            this.setState({ loading: false });
        } catch (error) {
            const { data } = error.response;

            this.setState({
                loading: false,
                errors: data.errors,
            });
        }
    };

    render() {
        const { classes } = this.props;
        const { loading, errors } = this.state;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form
                        className={classes.form}
                        onSubmit={this.handleSigninSubmit}
                        noValidate
                    >
                        <FormControl
                            margin="normal"
                            required
                            fullWidth
                            error={errors.hasOwnProperty('email')}
                        >
                            <InputLabel htmlFor="email">
                                Email Address
                            </InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={this.state.email}
                                onChange={event => {
                                    event.persist();

                                    this.setState(prevState => {
                                        let errors = { ...prevState.errors };
                                        delete errors.email;

                                        return {
                                            email: event.target.value,
                                            errors,
                                        };
                                    });
                                }}
                                autoFocus
                            />

                            {errors.hasOwnProperty('email') && (
                                <FormHelperText>
                                    {errors.email[0]}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl
                            margin="normal"
                            required
                            fullWidth
                            error={errors.hasOwnProperty('password')}
                        >
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={event => {
                                    event.persist();

                                    this.setState(prevState => {
                                        let errors = { ...prevState.errors };
                                        delete errors.password;

                                        return {
                                            password: event.target.value,
                                            errors,
                                        };
                                    });
                                }}
                            />

                            {errors.hasOwnProperty('password') && (
                                <FormHelperText>
                                    {errors.password[0]}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={loading}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);

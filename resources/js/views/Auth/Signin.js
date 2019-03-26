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
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

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
        };
    }

    handleSigninSubmit = async (values, form) => {
        this.setState({ loading: true });

        form.setSubmitting(false);
        try {
            const { pageProps } = this.props;
            const { email, password } = values;

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

            form.setErrors(data.errors);
        }
    };

    render() {
        const { classes } = this.props;
        const { loading, apiErrors } = this.state;

        const renderForm = (
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .required()
                        .email(),
                    password: Yup.string().required(),
                })}
                onSubmit={async (values, form) => {
                    await this.handleSigninSubmit(values, form);
                }}
            >
                {({ values, handleChange, errors, isSubmitting }) => (
                    <Form className={classes.form} noValidate>
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
                                value={values.email}
                                onChange={handleChange}
                                autoFocus
                            />

                            {errors.hasOwnProperty('email') && (
                                <FormHelperText>{errors.email}</FormHelperText>
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
                                value={values.password}
                                onChange={handleChange}
                            />

                            {errors.hasOwnProperty('password') && (
                                <FormHelperText>
                                    {errors.password}
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
                            disabled={
                                isSubmitting || Object.keys(errors).length > 0
                            }
                        >
                            Sign in
                        </Button>
                    </Form>
                )}
            </Formik>
        );

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

                    {renderForm}
                </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);

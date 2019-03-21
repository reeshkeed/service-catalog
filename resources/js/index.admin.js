import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

//JSX
const App = props => (
    <Router>
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </>
    </Router>
);

if (document.querySelector('#root')) {
    ReactDOM.render(<App />, document.querySelector('#root'));
}

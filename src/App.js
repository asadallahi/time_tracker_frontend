import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import List from "./components/List";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">

                    <div className="header">
                        <Header/>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Content}/>
                        <Route path="/list" component={List}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

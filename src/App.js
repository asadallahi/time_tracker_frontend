import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import List from "./components/List";
import './assets/css/style.css';

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
        <p>
            a simple time tracker based on React.js developed by <a href="https://github.com/asadallahi/time_tracker_frontend"> Seyed Hossein Asadollahi</a>
        </p>
    </div>
);

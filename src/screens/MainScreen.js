import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';


class MainScreen extends Component {
    render() {
        return (
            <div>
                Farhan Nazir
                <Link to="/resume">Resume</Link>
                
            </div>
        );
    }
}

MainScreen.propTypes = {

};

export default MainScreen;
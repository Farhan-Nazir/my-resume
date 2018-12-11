import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Resume from './Resume';

class MainScreen extends Component {
    render() {
        return (
            <div>
                Farhan Nazir
                <Resume />
            </div>
        );
    }
}

MainScreen.propTypes = {

};

export default MainScreen;
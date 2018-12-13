import React, { Component } from 'react';
import Projects from './Projects';
import Experiences from './Experiences';
import Skills from './Skills';
import Education from './Education';
import Network from './Network';

import { Link } from 'react-router-dom';

class Resume extends Component {
    render() {
        return (
            <div>
                My Resume
                <Link to="/projects">My Projects</Link>
                <Link to="/experiences">My Experiences</Link>
                <Link to="/skills">My IT-Skills</Link>
                <Link to="/education">My Qualifications</Link>
                <Link to="/network">My Network</Link>
            </div>
        );
    }
}

export default Resume;
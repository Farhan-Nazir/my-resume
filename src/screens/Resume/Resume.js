import React, { Component } from 'react';
import Projects from '../Projects/Projects';
import Experiences from '../Experiences/Experiences';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Network from '../Network/Network';

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
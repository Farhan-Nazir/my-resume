import React, { Component } from 'react';
import Projects from './Projects';
import Experiences from './Experiences';
import Skills from './Skills';
import Education from './Education';
import Network from './Network';

class Resume extends Component {
    render() {
        return (
            <div>
                My Resume
                <Projects />
                <Experiences />
                <Skills />
                <Education />
                <Network />
            </div>
        );
    }
}

export default Resume;
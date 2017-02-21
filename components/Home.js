import React, {Component} from 'react';

//components
import ProjectsGallery from './ProjectsGallery.js';
import NavBar from './NavBar';
import SkillsSpinner from './SkillsSpinner';
import SkillCharts from './SkillCharts';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-container'>
        <NavBar />
        <h1>Skills</h1>
        <div style={{display: 'flex'}}>
          <SkillsSpinner />
          <SkillCharts />
        </div>
        <h1>Project Overview</h1>
        <ProjectsGallery />
      </div>
    )
  }
}
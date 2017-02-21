import React, {Component} from 'react';
import {observer} from 'mobx-react';

//components
import ProjectsGallery from './ProjectsGallery.js';
import NavBar from './NavBar';
import SkillsSpinner from './SkillsSpinner';
import SkillCharts from './SkillCharts';

@observer class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeChart: 'Languages'
    }

    this.setActiveChart = this.setActiveChart.bind(this);
  }

  setActiveChart(str) {
    if (str !== this.state.activeChart) {    
      this.setState({
        activeChart: str
      })
    }

    console.log(this.state.activeChart)
  }

  render() {
    return (
      <div className='main-container'>
        <NavBar />
        <h1>Skills</h1>
        <p>I am knowledgable across the stack, with specialization in front-end development.</p>
        <div style={{display: 'flex'}}>
          <SkillsSpinner setActiveChart={(str) => this.setActiveChart(str)} activeChart={this.state.activeChart}/>
          <SkillCharts activeChart={this.state.activeChart}/>
        </div>
        <h1>Project Overview</h1>
        <p>Check out my recent projects!</p>
        <ProjectsGallery />
        <div className='filler'></div>
      </div>
    )
  }
}

export default App
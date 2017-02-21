import React, {Component} from 'react';
import {observer} from 'mobx-react';

//components
import ProjectsGallery from './ProjectsGallery.js';
import NavBar from './NavBar';
import SkillsSpinner from './SkillsSpinner';
import SkillCharts from './SkillCharts';
import HeaderPanel from './HeaderPanel';
import LandingComponent from './LandingComponent';

var content = {
  skills: {
    mainHeader: 'Skills',
    headerDetail: 'I am knowledgable across the stack, with specialization in front-end development. I love using React and CSS3 tricks to create dynamic and responsive UIs!',
    buttonName: 'View Full Resume',
    clickHandler: () => console.log('Skills')
  },
  projects: {
    mainHeader: 'Projects',
    headerDetail: 'Here are some of my projects! The apps were created with React with MobX state management or Angular Frameworks, hosted on Express server with a MySQL or MongoDB back end. Platforms include web, mobile, and Chrome extension.',
    buttonName: 'See Project Details',
    clickHandler: () => console.log('Projects')
  },
  about: {
    mainHeader: 'About Me',
    headerDetail: 'In addition to programming, I have some other skills and experiences in the semiconductor, healthcare, and art industry!',
    buttonName: 'See Other Projects',
    clickHandler: () => console.log('About')
  }
}

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

  scrollListener() {
    var body = document.querySelector('.main-container');
  }

  render() {
    return (
      <div className='main-container'>
        <NavBar />
        <LandingComponent />
        <HeaderPanel 
          mainHeader={content.skills.mainHeader} 
          headerDetail={content.skills.headerDetail}
          buttonName={content.skills.buttonName}
          clickHandler={content.skills.clickHandler}
        />
        <div style={{display: 'flex'}}>
          <SkillsSpinner setActiveChart={(str) => this.setActiveChart(str)} activeChart={this.state.activeChart}/>
          <SkillCharts activeChart={this.state.activeChart}/>
        </div>
        <HeaderPanel 
          mainHeader={content.projects.mainHeader} 
          headerDetail={content.projects.headerDetail}
          buttonName={content.projects.buttonName}
          clickHandler={content.projects.clickHandler}
        />
        <ProjectsGallery />
        <HeaderPanel 
          mainHeader={content.about.mainHeader} 
          headerDetail={content.about.headerDetail}
          buttonName={content.about.buttonName}
          clickHandler={content.about.clickHandler}
        />
        <div className='filler'></div>
      </div>
    )
  }
}

export default App
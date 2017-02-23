import React, {Component} from 'react';
import {observer} from 'mobx-react';
import $ from 'jquery'


//components
import ProjectsGallery from './ProjectsGallery.js';
import NavBar from './NavBar';
import SkillsSpinner from './SkillsSpinner';
import SkillCharts from './SkillCharts';
import HeaderPanel from './HeaderPanel';
import LandingComponent from './LandingComponent';
import Tooltip from './Tooltip'
import OtherExperience from './OtherExperience';

var content = {
  skills: {
    mainHeader: 'Skills',
    headerDetail: 'I am a software engineer knowledgable across the stack, with specialization in front-end development. I love using React and CSS3 tricks to create dynamic and responsive UIs! Check my skills below.',
    buttonName: 'View Full Resume',
    clickHandler: () => console.log('Skills')
  },
  projects: {
    mainHeader: 'Projects',
    headerDetail: 'Here are some of my projects built with the tech mentioned above! Platforms include web, mobile, and Chrome extension.',
    buttonName: 'See Project Details',
    clickHandler: () => console.log('Projects')
  },
  about: {
    mainHeader: 'About Me',
    headerDetail: 'I have professional experience in the semiconductor, healthcare, and art industries and care deeply about engineering solutions that improve the lives of others. I also love painting and design!',
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
          id='skills'
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
          id='projects'
          mainHeader={content.projects.mainHeader} 
          headerDetail={content.projects.headerDetail}
          buttonName={content.projects.buttonName}
          clickHandler={content.projects.clickHandler}
        />
        <ProjectsGallery />
        <HeaderPanel 
          id='about'
          mainHeader={content.about.mainHeader} 
          headerDetail={content.about.headerDetail}
          buttonName={content.about.buttonName}
          clickHandler={content.about.clickHandler}
        />
        <OtherExperience />


        <div id='contact' className='filler'>
          <div style={{margin: '20px 0 20px 0', flex: 1, borderRight: '3px solid white'}}></div>
          <div style={
            {
              display: 'flex', flex: 1, flexDirection: 'column', 
              justifyContent: 'flex-end', fontSize: '2em', padding: '20px'
            }
          }>
            <span style={{textAlign: 'right'}}>Emmeline Lan</span>
            <a style={{textAlign: 'right'}} href='https://mail.google.com/mail/?view=cm&fs=1&to=emmeline.lan@gmail.com'>Emmeline.Lan@gmail.com</a>
            <span style={{textAlign: 'right'}}>(510) 468-6002</span>
          </div>
        </div>
      </div>
    )
  }
}

export default App
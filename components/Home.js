import React, {Component} from 'react';

//components
import ProjectsGallery from './ProjectsGallery.js'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-container'>
        <h1>Project Overview</h1>
        <ProjectsGallery />
      </div>
    )
  }
}
import React, {Component} from 'react';

export default class LandingComponent extends Component {
  constructor() {
    super();
  }

  pageTitle() {
    return (
      <div className='page-title'>
        <span>Welcome to</span>
        <br />
        <span>my portfolio!</span>
      </div> 
    )
  }

  jobTitle() {
    return (
      <div className='job-title'>
        <div>Full stack<br/>developer</div>
      </div>
    )
  }

  circleImage() {
    return (
      <div className='circle-container'>
        <img className='circle-image' src='http://i.imgur.com/jBExftp.png'></img>
      </div>
    )
  }

  imageBar() {
    return (
      <div className='image-bar'>
        Made with
        <div>
          <img id='css3' src='http://i.imgur.com/Ti4jtiW.png'></img>
          <img id='html5' src='http://i.imgur.com/iooM79o.png'></img>
          <img id='react' src='http://i.imgur.com/vadN1e6.png'></img>
        </div>
      </div>
    )
  }


  render() {
    return(
      <div className='landing-container'>
        <div className='landing-bar'></div>
        {this.pageTitle()}
        {this.jobTitle()}
        {this.circleImage()}
        {this.imageBar()}
      </div>
    )
  }


}
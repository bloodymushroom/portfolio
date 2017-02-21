import React, {Component} from 'react';

export default class LandingComponent extends Component {
  constructor() {
    super();
  }

  pageTitle() {
    return (
      <div className='pageTitle'>
        <span>Welcome to</span>
        <br />
        <span>my portfolio!</span>
      </div> 
    )
  }

  jobTitle() {
    return (
      <div className='jobTitle'>
        <span>Full stack</span>
        <br />
        <span>developer</span>
      </div>
    )
  }
  render() {
    return(
      <div className='landing-container'>
        {this.pageTitle()}
        {this.jobTitle()}
      </div>
    )
  }


}
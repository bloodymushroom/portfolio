import React, {Component} from 'react'

export default class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navitem logo'>
        </div>
        <div className='navitem left'>
          <div className='nav-row top'>
          <a href='#'><span className='title hoverable'>Portfolio</span></a>
          </div>
          <div className='nav-row bottom'>    
            <span>Emmeline Lan</span>
          </div>
        </div>
        <div className='navitem right'>
          <div className='nav-row top'>
            <a href='#'>Home</a><span> | </span>
            <a>Projects</a><span> | </span>
            <a>About</a><span> | </span> 
            <a>Contact</a>
          </div>
          <div className='nav-row bottom'>
            Connect with me:
            <a href='https://www.linkedin.com/in/emmeline-lan'>LinkedIn</a>
            <a href='https://angel.co/emmeline-lan'>Angelist</a>
            <a href='https://github.com/bloodymushroom'>Github</a>
          </div>
        </div>
      </div>
    )
  }
}

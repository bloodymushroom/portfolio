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
            <div style={{marginTop: '5px'}}>Connect with me:</div>
            <a href='https://www.linkedin.com/in/emmeline-lan'>
              <img className='nav-icon' src='http://i.imgur.com/AUtCHRm.png'/>
            </a>
            <a href='https://github.com/bloodymushroom'>
              <img className='nav-icon' src='http://i.imgur.com/XSxut9c.png'/>
              
            </a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=emmeline.lan@gmail.com'>
              <img style={{color: 'white'}} className='nav-icon' src='http://i.imgur.com/DIcvATQ.png'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

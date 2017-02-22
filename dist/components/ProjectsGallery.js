import React, {Component} from 'react'

export default class ProjectsGallery extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleOpenActive(e) {
      var property = e.propertyName;
      
      if (property.indexOf('flex') !== -1) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach( (panel) => {
      panel.addEventListener('click', toggleOpen);
      panel.addEventListener('transitionend', toggleOpenActive);
    });
  }

  render() {
    return (
      <div className='panels'>
        <div className='panel panel-1'>
          <p>Angular - Express - Mongo</p>
          <p>Tinder Clone</p>
          <p>My take on Tinder</p>
        </div>
        <div className='panel panel-2'>
          <p>React - Express - MySQL</p>
          <p>HR Gotchi</p>
          <p>Digital Class Pet</p>
        </div>
        <div className='panel panel-3'>
          <p>React - Express - MongoDB</p>
          <p>Colorz.io</p>
          <p>Color Palette</p>
        </div>
        <div className='panel panel-4'>    
          <p>React - Express - MySQL</p>
          <p>Callback</p>
          <p>Personal Recruiter</p>
        </div>
      </div>
    )
  }
} 
import React, {Component} from 'react'

//components 
import Tooltip from './Tooltip'

export default class ProjectsGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldTip: true
    }

    this.removeTip = this.removeTip.bind(this);
  }

  removeTip() {
    this.setState({
      shouldTip: false
    })
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
      <div onClick={this.removeTip} className='panels'>
        {false && <Tooltip style={{opacity: 1, top:'30%', right:'25%'}} content='Select a panel!' />}
        <div className='panel panel-1'>
          <p>Angular - Express - Mongo</p>
          <p className='clickable-text'>Tinder Clone</p>
          <p>My take on Tinder</p>
        </div>
        <div className='panel panel-2'>
          <p>React - Express - MySQL</p>
          <p className='clickable-text'>HR Gotchi</p>
          <p>Digital Class Pet</p>
        </div>
        <div className='panel panel-3'>
          <p>React - Express - MongoDB</p>
          <p className='clickable-text'>Colorz.io</p>
          <p>Color Palette</p>
        </div>
        <div className='panel panel-4'>    
          <p>React - Express - MySQL</p>
          <p className='clickable-text'>Callback</p>
          <p>Personal Recruiter</p>
        </div>
      </div>
    )
  }
} 
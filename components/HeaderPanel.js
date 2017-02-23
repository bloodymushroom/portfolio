import React, {Component} from 'react';
import Tooltip from './Tooltip'


export default class HeaderPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false
    }

    this.clickInProgress = this.clickInProgress.bind(this);
  }

  clickInProgress() {
    var context = this;

    if (!this.state.showPopup) {
      this.setState({
        showPopup: true
      })

      setTimeout( () => {

        this.setState({
          showPopup: false
        })
      }, 1500)
    }
  }

  render() {
    return (
      <div id={this.props.id} className='header-container'>
        <div className='header-column'>
          <div className='main-header'>
            <span>{this.props.mainHeader}</span>
          </div>
          <div className='header-detail'>
            <p>{this.props.headerDetail}</p>
          </div>
        </div>
        <div className='header-link'>
          <button onClick={this.clickInProgress} className='spec-button'>
          {this.state.showPopup && <Tooltip style={{top: '-80%', left: '60%'}} content='Pending, please check back later' />}
          {this.props.buttonName}
          </button>
        </div>
      </div>
    )
  }
}

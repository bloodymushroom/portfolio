import React, {Component} from 'react';

export default class HeaderPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='header-container'>
        <div className='header-column'>
          <div className='main-header'>
            <span>{this.props.mainHeader}</span>
          </div>
          <div className='header-detail'>
            <p>{this.props.headerDetail}</p>
          </div>
        </div>
        <div className='header-link'>
          <button onClick={this.props.clickHandler} className='spec-button'>{this.props.buttonName}</button>
        </div>
      </div>
    )
  }
}

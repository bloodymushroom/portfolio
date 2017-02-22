import React, {Component} from 'react';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style || {}} className='tooltip'>
        <span className='tooltip-content'>{this.props.content}</span>
      </div>
    )
  }
}
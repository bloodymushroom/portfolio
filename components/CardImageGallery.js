import React, {Component} from 'react'

export default class CardImageGallery extends Component {
  constructor(props) {
    super(props);
  }

  generateCard(image, label) {
    return (
      <div className='card-container'>
        Gallery Coming Soon!
      </div>
    )
  }

  render() {
    return (
      <div className='gallery-container'>
        <div className='arrow left-arrow'></div>
        <div className='gallery'>
          {this.generateCard()}
        </div>
        <div className='arrow right-arrow'></div>
      </div>
    )
  }
}
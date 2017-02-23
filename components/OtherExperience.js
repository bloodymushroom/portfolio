import React, {Component} from 'react'
import $ from 'jquery'

//commponents
import CardImageGallery from './CardImageGallery'

export default class OtherExperience extends Component {
  constructor(props) {
    super(props);
  }

  imageSlider(url, cat) {
    return (
      <div className='slide-row'>
        <div className='other-image'>
          <img src={url}></img>
          <img style={{opacity: 0.5}}
            src='http://i.imgur.com/brim1t3.png' 
          />
        </div>
        <div className='other-image hidden'>
          <span className='other-text'>
            {cat.split(',')[0]}
            <span style={{fontStyle: 'italic'}}>{cat.split(',')[1]}</span>
          </span>
        </div>
      </div>
    )
  }

  componentDidMount(){
    var sliders = document.querySelectorAll('.slide-row');
    sliders.forEach((slider) => {
      slider.addEventListener('mouseover', function() {
        console.log('hello')
        console.log(this.style)
        this.style.transform = 'translateX(-50%)';
      });

      slider.addEventListener('mouseout', function() {
        console.log('goodbye', this.style)
        this.style.transform = 'translateX(0%)';
      })
    })


  }

  render() {
    return (
      <div className='other-container'>
        <div style={{width:'30%', borderRight: '3px solid #ECEFF1'}} className='other-cat'>
          <div className='other-header'>Work Experience</div>
          {this.imageSlider('http://i.imgur.com/iFgIDevm.png', 'Case Manager,Pharmaceutical Data Analysis')}
          {this.imageSlider('http://i.imgur.com/tAhhLXPm.jpg', 'Developer,Semiconductor Processing')}
          {this.imageSlider('http://i.imgur.com/5teFoqH.png', 'Clinical Assistant,Healthcare Management')}
          {this.imageSlider('http://i.imgur.com/3agxoSXm.png', 'Bachelor of Science,Materials Engineering')}
        </div>
        <div style={{width: '68%', marginLeft: '2%'}} className='other-cat'>
          <div className='other-header'>Art and Design</div>
          <CardImageGallery />
        </div>
      </div>
    )
  }
}
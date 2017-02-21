import React, {Component} from 'react'

export default class SkillsSpinner extends Component {
  constructor(props) {
    super(props);
  }

  transformDivs(n) {
    var deg = document.documentElement.style.setProperty('--rotation', `${n + 'deg'}`);
    
    var cat1 = document.querySelector('.cat-1 *');
    var cat2 = document.querySelector('.cat-2 *');
    var cat3 = document.querySelector('.cat-3 *');
    var cat4 = document.querySelector('.cat-4 *');

    cat1.style.transform = `rotate(${-n - 90 + 'deg'}) translate(-50%)`
    cat2.style.transform = `rotate(${-n - 180 + 'deg'}) translate(-50%)`
    cat3.style.transform = `rotate(${-n - 270 + 'deg'}) translate(-50%)`
    cat4.style.transform = `rotate(${-n + 'deg'}) translate(-50%)`

  }

  ComponentWillMount() {
    
  }

  render () {
    return (
      <div>
        <div className='transformer'>
          <div onClick={() => this.transformDivs(0)} className='cat cat-1'>
            <div>
            Languages
            </div>
          </div>
          <div onClick={() => this.transformDivs(-90)} className='cat cat-2'>
            <div>
            Frameworks
            </div>
          </div> 
          <div onClick={() => this.transformDivs(180)} className='cat cat-3'>
            <div>
            Back End
            </div>
          </div>
          <div onClick={() => this.transformDivs(90)} className='cat cat-4'>
            <div>
            Other
            </div>
          </div>
        </div>
      </div>
      )
  }
}
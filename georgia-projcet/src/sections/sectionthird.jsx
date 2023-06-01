import React from 'react'
import '../styles/landing.css'
import fourthimage from '../assetsForSections/imgHawaii 1 (1).png'

export function SectionThird() {
  return (
    <div>
      <div className='fourth-section'>
          <div className='fourth-section-holder'>
            <div className='fourth-section-text-side'>
              <h1>What the  participants of <br></br>our trips write</h1>
              <p>87% of participants come from <br></br>a personal recommendation <br></br>from
                  friends. And every 4th <br></br>travels with us more than twice!
              </p>
              <button>Read Reviews</button>
            </div>
            <div className='fourth-section-photo-side'>
              <img src={fourthimage} alt='/' className='fourth-image' /> 
            </div>
          </div>
        </div>
    </div>
  )
}

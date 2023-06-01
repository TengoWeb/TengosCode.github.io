import React from 'react'
import section1img from '../assetsForSections/sectionimg1.png'


export function Sectionfirst() {
  return (
    <div>
       <div className='section-first'>
          <div className='section-box'>
            <div className='section1img'>
            <img src={section1img} alt='/'></img> </div>
            <div className='scetion-box-title'>
              <h1>View All Tours Destinations</h1>
              <h3>Ocean coasts wild <br></br>beaches with  rare rocks trees. <br></br>Local architecture and <br></br>prisitne wildlife</h3>
              <button>See all</button>
            </div>  
          </div>
        </div>
    </div>
  )
}



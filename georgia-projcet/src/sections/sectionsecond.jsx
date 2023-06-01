import React from 'react'
import '../styles/landing.css'

export function SectionSecond() {
  return (
    <div>
        <div className='section-third'>
          <div className="section-third-holder">
            <div className="section-third-holder-text">
              <h1>Leave a Request for a <br></br>free consultation</h1>
              <h3>We will call you back <br></br>as Soon as possible</h3>
            </div>
            <form className="section-third-holder-input">
              <input className="section-third-holder-input-nameinput"type='name' placeholder='Your Name'></input>
              <input className="section-third-holder-number-nameinput" type="tel" placeholder='Your Number'></input>
              <button>Send Request</button>
            </form>
          </div>
        </div>
    </div>
  )
}


import React from 'react';
import {Navigation} from '../components/navigation'
import '../styles/contact.css';
import '../styles/Navbar.css'
import img123 from '../assetsContact/img.jpg'


export function ContactPage() {
  return (
    <div className='contactPage'>
       <div className='contactNavbar'>
          <Navigation />
        </div>
       <div className='contactTextImageBox'>
          <div className='contatLeftSideBox'>
            <h1>Let's Work Together.</h1>
            <p>or reach us via: <span>Trip&Mind@something.com</span></p>
            <from className="ContactForm">
              <div className='ContactNameLastName'>
                <input type="text" placeholder="First Name" className='contactUserName'/>
                <input type="text" placeholder="Last Name" className='contactLastName'/>
              </div>
                <input type="email" placeholder="Email" className='contactLastName'/><br></br>
                <input type="text" placeholder='Message'/>
                <div className='contactbuttonsholder'>
                  <input type="file" placeholder='Add attachment'></input>
                  <button className='contactbutton'>Send Message</button>
                </div>
            </from>
          </div>
          <div className='contatRightSideBox'>
            <img className='contactImage' src={img123} alt='/'/>
            
        </div>
      </div>
    </div>

  );
}





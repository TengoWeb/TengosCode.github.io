import React from 'react';
import {Navigation} from '../components/navigation'
import '../styles/contact.css';
import '../styles/Navbar.css'
import image from '../assetsContact/img.png'


export function ContactPage() {
  return (
    <div classNameName='contactPage'>
       <div classNameName='contactNavbar'>
          <Navigation />
        </div>
       <div classNameName='contactTextImageBox'>
          <div classNameName='contatLeftSideBox'>
           <h1 style={{color:'red', textAlign:'center'}}>ERROR 404 - PAGE NOT DOUNT </h1>
          <div classNameName='contatRightSideBox'>
            <img  alt='/'/>
          </div>
        </div>
      </div>
    </div>

  );
}





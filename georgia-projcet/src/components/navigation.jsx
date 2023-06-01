import React from 'react'
import logoComponent from '../assetsForLandingPage/iconLogoWhite 1.png'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom';

export  function Navigation() {
  return (
    <div className='NavbarComponent'>
        <div className='logoNavbar'>
            <Link to='/'><img src={logoComponent} alt='/' /> </Link>
        </div>
        <div className='NavbarList'>
            <ul>
                <Link to='/'><li>All tours</li></Link>
                <Link to='/'><li>Reviews</li></Link>
                <Link to='/contactpage'><li>Contact</li></Link>
            </ul>
         </div>
        <div className='toggle-btn'>
            
            <button>Sign in</button>
        </div>
    </div>
  )
}

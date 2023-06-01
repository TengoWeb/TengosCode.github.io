import React from 'react'
import '../styles/footer.css'
import {Link} from 'react-router-dom';
import Logotip from '../asssetsForFooter/iconLogoDark 1.png'
import photologo from '../asssetsForFooter/Group (1).svg'
import yt from '../asssetsForFooter/yt.svg'
import Twitter from '../asssetsForFooter/twitter.svg'
import fb from '../asssetsForFooter/fb.svg'

export function Footer() {
  return (
    <div className='footer'>
        <div className='footer-holder'>
            <Link to='/'><img src={Logotip} alt='/'/></Link>
            <p>2022 © All rights reserved</p>
            <div className='footer-socials-holder'>
                <img src={photologo} alt='/'/>
                <p>(995)555555551</p>
                <div className='footer-socials'>
                    <img src={yt} alt='/'/>
                    <img src={Twitter} alt='/'/>
                    <img src={fb} alt='/'/>
                </div>
            </div>
        </div>
    </div>
  )
}



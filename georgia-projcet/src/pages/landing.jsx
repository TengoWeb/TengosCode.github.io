import  { React } from 'react'
//import { Sectionfirst } from '../sections/sectionfirst';
//import { SectionSecond } from '../sections/sectionsecond';
import {ScrollRevealComponent} from '../components/scrollrevealcomponent';
//import { SectionThird } from '../sections/sectionthird';
import logo from '../assetsForLandingPage/iconLogoWhite 1.png'
import '../styles/landing.css'
import {Link} from 'react-router-dom';
import  playerbutton from '../assetsForLandingPage/Play_Button.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';    
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
//import fourthimage from '../assetsForSections/imgHawaii 1 (1).png'
//import section1img from '../assetsForSections/sectionimg1.png'/
import burgermenu from '../assetsForLandingPage/Burger.png'

  

    export function Landing() {
      return ( 
        <ScrollRevealComponent>
          <div className='LandingPage'>         
              <div className='Navigtion-hodler'>
                <div className='logo'>
                  <img src={logo} alt='/' />
                </div>
                <div className='list'>
                  <ul>
                    <Link to='/'><li>All tours</li></Link>
                    <Link to='/reviewpage'><li>Reviews</li></Link>
                    <Link to='/contactpage'><li>Contact</li></Link>
                  </ul>
                </div>
                <div className='toggle-btn'>
                    <img src={burgermenu}  alt='/' className='burgermenu' />
                  <Link to="/signin"> <button >Sign in</button> </Link>
                </div>
              </div>
              
              <div className='Landing-Text-section'>
                  <h1 id='Landing-Text-section-h1'>Discover a new Ireland</h1>
                  <h2 id='Landing-Text-section-h2'>Author's tours to exotic corners of the<br></br> world from Alexander Ford</h2>
                  <div className='Landing-buttons-holder'>
                      <button className='Landing-btn'>Submit your application</button>
                      <button className='Landing-player-btn'><img src={playerbutton} alt='/'/></button>
                  </div>
                  <div className='Landing-social-media-btns-holder'>
                      <div className='Landing-scoial-media-btns'>
                          <YouTubeIcon style={{ color: 'white',  alignItems: 'center' , cursor: 'pointer'}}/> <InstagramIcon style={{ color: 'white',  alignItems: 'center' , cursor: 'pointer' , marginLeft:'30px'}}/> <TwitterIcon style={{ color: 'white',  alignItems: 'center' , cursor: 'pointer', marginLeft:'30px'}}/>
                      </div>
                      <p className='subscribe'>Subscripe to our social networks</p>
                  </div>
              </div>
              
              <div className='Landing-backgrounds-images-holder'>
              <Link to='/secondlanding'>
                <div className='bg1'>
                  <h2 className='bg-number'>02</h2>
                  <div className='nameofbg'>
                    <h2 className='bg-title'>Iceland's <br></br>WaterFalls</h2>
                    <ArrowRightAltIcon style={{ marginLeft: '90px' ,width: '55px' , fontSize : '40px'}}/>
                  </div>
                </div>
              </Link>
              <Link to='/thirdlanding'>
                <div className='bg2'>
                  <h2 className='bg-number'>03</h2>
                  <div className='nameofbg'>
                    <h2 className='bg-title'>Fabulous <br></br>Dolomites</h2>
                    <ArrowRightAltIcon style={{ marginLeft: '90px' ,width: '55px' , fontSize : '40px'}}/>
                  </div>
                </div>
              </Link>
              <Link to='/fourthlanding'>
                <div className='bg3'>
                  <h2 className='bg-number'>04</h2>
                  <div className='nameofbg'>
                    <h2 className='bg-title'> Undiscovered  <br></br>Norway</h2>
                    <ArrowRightAltIcon style={{ marginLeft: '90px' ,width: '55px' , fontSize : '40px'}}/>
                  </div>
                </div>
              </Link>
              </div>
          </div>
          

          
        </ScrollRevealComponent>
      );
    }


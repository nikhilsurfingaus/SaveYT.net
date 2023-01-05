import React from 'react'
import FooterCol from './FooterCol';
import './Footer.css' 
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'
import 'animate.css';

function Footer() {
  return (
  <div className='FMain'>
      <div className="container animate__animated animate__fadeIn animate__delay-0.5s">
        <div className="footer__col1">
          <Link to={'/home'}>
          <h1 className="footer__col1__title">SaveYT.net
          <img style={{height: "40px", width: "40px", marginLeft:"10px" }} src={Logo} alt="logo" /></h1>
          </Link>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Navigation"
            links={[
              {
                title: 'Home',
                path: '/home',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'Help',
                path: '/help',
              },
              {
                type: 'Link',
                title: 'Install',
                path: '/install',
              }
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Legals"
            links={[
              {
                title: 'Quora Article',
                path: 'https://www.quora.com/Is-downloading-YouTube-videos-legal-Doesnt-YouTube-lose-out-on-advertising-revenue-this-way',
              },
              {
                title: 'MakeUseOf Article',
                path: 'https://www.makeuseof.com/tag/is-it-legal-to-download-youtube-videos/#:~:text=Downloading%20videos%20from%20YouTube%20is,permission%20is%20a%20criminal%20act.',
              },
              {
                title: 'Tech Advisor Article',
                path: 'https://www.techadvisor.com/article/725837/is-it-legal-to-download-youtube-video.html',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Socials"
            links={[
              {
                title: 'Youtube',
                path: 'https://www.youtube.com/',
                imgUrl: Logo,
                type: 'IMG',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
                imgUrl: Logo,
                type: 'IMG',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
                imgUrl: Logo,
                type: 'IMG',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            Copyright 2023 Nikhil Naik | @WaveFlightSimulation All Rights Reserved          
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
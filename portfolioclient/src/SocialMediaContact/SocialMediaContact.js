import React from 'react'
import './SocialMediaContact.css'

import { Link } from 'react-router-dom'
function SocialMediaContact() {
    return (
        <section className='social-media-container'>
          <div className='pic-profile'><img  src='./images/my_picture.png'/></div> 
          <h3>MAHDI WEB</h3>
          <a className="social-media-button" href="https://www.linkedin.com/in/mahdi-kaaniche-web-dev/">
          <div >
            <div className='horizontal'>
            
            <div className="linkedin"></div>
           <div style={{color:'black'}}>LinkedIn</div> 
            </div>
            
         </div>
          </a>
          <a className="social-media-button" href="https://www.instagram.com/mahdi_webi/">
          <div >
            <div className='horizontal'>
            
            <div className="insta"></div>
           <div style={{color:'black'}}>Instagram</div> 
            </div>
            
         </div>
          </a>
            <a className="social-media-button" href="https://github.com/mahdiwebi">
          <div >
            <div className='horizontal'>
            <div className="github"></div>
           <div style={{color:'black'}}>Github</div> 
            </div>
            
         </div>
          </a>
            <a className="social-media-button" href="https://www.upwork.com/freelancers/~0142db5643926d7942?viewMode=1">
          <div >
            <div className='horizontal'>
            <div className="upwork"></div>
           <div style={{color:'black'}}>Upwork</div> 
            </div>
            
         </div>
          </a>
            <a className="social-media-button" href="https://www.fiverr.com/mahdikaanich916?">
          <div >
            <div className='horizontal'>
            <div className="fiverr"></div>
           <div style={{color:'black'}}>Fiverr</div> 
            </div>
            
         </div>
          </a>
          <Link className="page-button" to="businessProfile">
          <div style={{textAlign:'center'}}>
            
             BUSINESS PROFILE
            
            
         </div>
         </Link>
         <Link to='/' className="page-button">
          <div style={{textAlign:'center'}}>
            
            HOME PAGE
            
            
         </div>
         </Link>
        </section>
    )
}

export default SocialMediaContact

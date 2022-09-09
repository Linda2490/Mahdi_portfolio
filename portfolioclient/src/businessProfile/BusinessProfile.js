import React from 'react'
import '../App.css'
import '../PortfolioContainer/works/Works.css'

import Home from '../PortfolioContainer/Home/Home'

import Navbar from '../PortfolioContainer/Navbar/Navbar'
import Vision from '../PortfolioContainer/Home_following/vision'
import Services from '../PortfolioContainer/services_component/services'
import Section from '../PortfolioContainer/sectionHeader'
import TechSlider from '../PortfolioContainer/services_component/TechSlider'
import Works from '../PortfolioContainer/works/Works'
import ReviewsSlider from '../PortfolioContainer/Testimonials/ReviewsSlider'
import PartnerSlider from '../PortfolioContainer/clients/PartnersSlider'
import Contact from '../PortfolioContainer/contact/Contact'


function BusinessProfile() {
    return (
        <div className='second-container'>
            <pre class="hacking-animation__text">
    </pre>
    <div className="main-container">
            <Navbar/>
            <Home/>
            <Vision/>
            <Section
      ID='Services'
      title="Services"
      subtitle='OUR SERVICES FOR CLIENTS'
      />
            <Services/>
            <TechSlider/>
            <Section
      ID='works'
      title="Projects"
      subtitle="THINGS WE'VE MADE FOR OUR CLIENTS"
      />
       <Works />
       <Section
      ID='Testimonials'
      title="Testimonials"
      subtitle="OUR SERVICES FOR CLIENTS"
      />
      <ReviewsSlider/>
      <Section
      title="Our clients"
      subtitle="OUR SERVICES FOR CLIENTS"
      />
<PartnerSlider/>
<Contact />
        </div>
        </div>
    )
}

export default BusinessProfile

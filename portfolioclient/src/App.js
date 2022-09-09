import React from 'react'
import './App.css'

import AllWorks from './all-works-page/allMyWorks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BusinessProfile from './businessProfile/BusinessProfile'
import Homepage from './Homepage'
import SocialMediaContact from './SocialMediaContact/SocialMediaContact'
import Bombshellsa from './PortfolioContainer/works/Bombshellsa'
import Agencyonefr from './PortfolioContainer/works/Agencyonefr'
import Showtagtv from './PortfolioContainer/works/Showtagtv'
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/AllWorks" element={<AllWorks />} />
         <Route path="/businessProfile/allworks" element={<AllWorks />} /> 
        <Route path="/businessProfile" element={<BusinessProfile />} />
        <Route path="/social_media_links/businessProfile" element={<BusinessProfile />} />
        <Route path="/social_media_links" element={<SocialMediaContact />} />
        <Route path="/businessProfile/social_media_links" element={<SocialMediaContact />} />
        <Route path="/bombshellsa-website" element={<Bombshellsa />} />
        <Route path="/agencyonefr-website" element={<Agencyonefr />} />
        <Route path="/showtagtv-website" element={<Showtagtv />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
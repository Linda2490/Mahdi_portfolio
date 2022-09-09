import React from 'react'
import "./Works.css";

function Agencyonefr() {
    return (
        <div className="works-container">
        <div className="cover-image">
          <img src="./images/websites/Image 3.png"></img>
        </div>

        <div className="portfolio-details">
          <div className="portfolio-details-title heading3">
            {" "}
            agencyone.fr {" "}
          </div>
          <div className="portfolio-details-underline"></div>

          <div className="portfolio-details-text heading5">
          We are a digital agency specialized in websites, mobile applications
            and design
          </div>

          <a className='button-works' href="https://agencyone.fr/">view the website</a>
        </div>
      </div>
    )
}

export default Agencyonefr

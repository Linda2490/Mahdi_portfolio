import React from 'react'
import "./Works.css";

function Showtagtv() {
    return (
        <div className="portfolio">
        <div className="portfolio-sample">
          <img src="./images/websites/Image 1.png"></img>
        </div>

        <div className="portfolio-details">
          <div className="portfolio-details-title heading3">
            {" "}
            Showtag.tv {" "}
          </div>
          <div className="portfolio-details-underline"></div>

          <div className="portfolio-details-text heading5">
          Showtag is an innovative editorial platform designed to help make
            your videos come to life through true storytelling magic. Your ad,
            your TV Show
          </div>

          <a className='button-works' href="https://showtag.tv/solutions/commercial/">view the website</a>
        </div>
      </div>
    )
}

export default Showtagtv

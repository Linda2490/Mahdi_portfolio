import React from "react";
import "./Works.css";

import { Link } from "react-router-dom";

export default function Works(props) {
  return (
    <section className="works-container">
      <div className="portfolio">
        <div className="portfolio-sample">
          <img src="./images/websites/Image 2.png "></img>
        </div>

        <div className="portfolio-details">
          <div className="portfolio-details-title heading3">
            {" "}
            bombshellsa.com{" "}
          </div>
          <div className="portfolio-details-underline"></div>

          <div className="portfolio-details-text heading5">
            Bombshell™️. Shopping and retail. SOURCED Globally | Supplied
            locally. Original Dr Martens from abroad
          </div>

          <Link className="button-works" to="bombshellsa-website">
            <a>view the website</a>
          </Link>
        </div>
      </div>
      <div className="portfolio">
        <div className="portfolio-sample">
          <img src="./images/websites/Image 3.png"></img>
        </div>

        <div className="portfolio-details">
          <div className="portfolio-details-title heading3"> agencyone.fr </div>
          <div className="portfolio-details-underline"></div>

          <div className="portfolio-details-text heading5">
            We are a digital agency specialized in websites, mobile applications
            and design
          </div>

          <Link className="button-works" to="/agencyonefr-website">
            <a>view the website</a>
          </Link>
        </div>
      </div>
      <div className="portfolio">
        <div className="portfolio-sample">
          <img src="./images/websites/Image 1.png"></img>
        </div>

        <div className="portfolio-details">
          <div className="portfolio-details-title heading3"> Showtag.tv </div>
          <div className="portfolio-details-underline"></div>

          <div className="portfolio-details-text heading5">
            Showtag is an innovative editorial platform designed to help make
            your videos come to life through true storytelling magic. Your ad,
            your TV Show
          </div>

          <Link className="button-works" to="/showtagtv-website">
            <a>view the website</a>
          </Link>
        </div>
      </div>

      <div className="works-button-section">
        <Link className="works-button" to="allworks">
          {" "}
          More projects
        </Link>
      </div>
    </section>
  );
}

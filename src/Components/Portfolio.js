import React from "react";
import img from "../img/grade_FILL0_wght400_GRAD0_opsz48.png";

const portfolioItems = [
  {
    url: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
  },
  {
    url: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
  },
];
const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1>PORTFOLIO</h1>
      <div className="port-line-star">
        <div className="port-line"></div>
        <div>
          <img src={img}></img>
        </div>
        <div className="port-line"></div>
      </div>
      <div className="portfolio-container">
        {
            portfolioItems.map((item)=>(
                <div className="portfolio-items">
                    <img src={item.url}/>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "../styles/cafecard.css";

import CardCarousel from "./CardCarousel";

export default function CafeCard(props) {
  const { id, images, name, city, rating, cost } = props;

  return (
    <div className="cafe-card-container">
      <CardCarousel images={images} id={id} />
      <div className="cafe-card-info-container">
        <div className="cafe-card-name-container">
          <h5>
            {name}, {city}
          </h5>
          {/* <p>{cost}</p> */}
        </div>
        <div className="cafe-card-score-container">
          <p>
            {cost} ‧ <i className="fa-solid fa-star fa-xs"></i> {rating}
          </p>
        </div>
      </div>
    </div>
  );
}

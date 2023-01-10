import React, { useState, useEffect } from "react";
import CafeCard from "./CafeCard";
import "../styles/cafecardsdisplay.css";
import axios from "axios";

export default function CafeCardsDisplay(props) {
  const city = props.city;

  //ℹ️ set up states
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/cafe/find-all/${city}`)
      .then((res) => {
        // console.log("CafeCardsDisplay", res.data);
        setCafes(res.data.cafes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cafe-cards-display-container">
      {cafes &&
        cafes.map((cafe) => {
          return (
            <CafeCard
              id={cafe._id}
              image={cafe.images[0]}
              images={cafe.images}
              name={cafe.name}
              city={cafe.city}
              rating={cafe.rating}
              cost={cafe.cost}
              key={cafe._id}
            ></CafeCard>
          );
        })}
    </div>
  );
}

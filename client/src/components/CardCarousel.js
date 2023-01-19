import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/auth.context";
import "../styles/cardcarousel.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CardCarousel(props) {
  const { images, id } = props;
  const [index, setIndex] = useState(1);
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/cafe/comment/find-user/${user._id}`
      )
      .then((res) => {
        // console.log("CardCarousel.js", res.data.favorites);
        setFavorites(res.data.favorites);
        if (res.data.favorites.find((e) => e._id === id)) {
          setIsFavorited(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddFavorite = () => {
    setIsFavorited(true);
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/cafe/add-favorite/${user._id}/${id}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleRemoveFavorite = () => {
    setIsFavorited(false);
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/cafe/remove-favorite/${user._id}/${id}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="card-carousel-image-container"
      style={{ position: "relative" }}
    >
      {index && (
        <Link to={`/cafes/${id}`}>
          <img src={images[index - 1]} alt="#"></img>
        </Link>
      )}

      <i className="cafe-card-heart-back fa-solid fa-heart fa-lg"></i>
      <i
        onClick={isFavorited ? handleRemoveFavorite : handleAddFavorite}
        style={{ color: isFavorited ? "red" : "rgba(0, 0, 0, 0.5)" }}
        className="cafe-card-heart fa-solid fa-heart fa-lg"
      ></i>

      <button
        onMouseEnter={(e) => {
          e.target.classList.add("visible");
        }}
        onMouseLeave={(e) => {
          e.target.classList.remove("visible");
        }}
        className="card-carousel-button-right"
        style={{
          position: "absolute",
          top: 125,
          right: 15,
          cursor: "pointer",
        }}
        onClick={() => {
          if (index === 5) {
            setIndex(0);
          }
          setIndex((oldValue) => oldValue + 1);
        }}
      >
        <i className="fa-solid fa-circle-chevron-right fa-2xl"></i>
      </button>
      <button
        onMouseEnter={(e) => {
          e.target.classList.add("visible");
        }}
        onMouseLeave={(e) => {
          e.target.classList.remove("visible");
        }}
        className="card-carousel-button-left"
        style={{
          position: "absolute",
          top: 125,
          left: 15,
          cursor: "pointer",
        }}
        onClick={() => {
          if (index === 1) {
            setIndex(6);
          }
          setIndex((oldValue) => oldValue - 1);
        }}
      >
        <i className="fa-solid fa-circle-chevron-left fa-2xl"></i>
      </button>
    </div>
  );
}

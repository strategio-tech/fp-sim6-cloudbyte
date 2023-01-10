import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/singlecafe.css";
import CommentsDisplay from "../components/CommentsDisplay";
import { Link } from "react-router-dom";

export default function SingleCafe() {
  const { id } = useParams();
  const [cafe, setCafe] = useState("");

  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/cafe/find-one/${id}`)
      .then((res) => {
        // console.log(res.data.cafe);
        setCafe(res.data.cafe);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="single-cafe-main-container">
      {cafe && (
        <>
          <div className="single-cafe-header-container">
            <h1>{cafe.name}</h1>
            <h5 style={{ float: "left" }}>{cafe.city}</h5>
            <p
              style={{
                float: "right",
                margin: 0,
                fontSize: ".9rem",
              }}
            >
              <i
                className="fa-solid fa-star"
                style={{ display: "inline-block", marginRight: 5 }}
              ></i>
              {cafe.rating}
            </p>
          </div>
          <div className="single-cafe-image-container">
            <div className="single-cafe-main-image">
              <Link
                onClick={() => {
                  setModalImage(cafe.images[0]);
                  setShowImageModal(true);
                }}
              >
                <img src={cafe.images[0]} alt="#"></img>
              </Link>
            </div>
            <div className="single-cafe-side-images">
              <div className="mb">
                <Link
                  onClick={() => {
                    setModalImage(cafe.images[1]);
                    setShowImageModal(true);
                  }}
                >
                  <img src={cafe.images[1]} alt="#"></img>
                </Link>
              </div>
              <div className="mb">
                <Link
                  onClick={() => {
                    setModalImage(cafe.images[2]);
                    setShowImageModal(true);
                  }}
                >
                  <img src={cafe.images[2]} className="rct" alt="#"></img>
                </Link>
              </div>
              <div>
                <Link
                  onClick={() => {
                    setModalImage(cafe.images[3]);
                    setShowImageModal(true);
                  }}
                >
                  <img src={cafe.images[3]} alt="#"></img>
                </Link>
              </div>
              <div>
                <Link
                  onClick={() => {
                    setModalImage(cafe.images[4]);
                    setShowImageModal(true);
                  }}
                >
                  <img src={cafe.images[4]} className="rcb" alt="#"></img>
                </Link>
              </div>
            </div>
          </div>
          {/*IMAGE MODAL*/}
          {showImageModal && (
            <div
              className="single-cafe-image-modal"
              onClick={() => {
                setShowImageModal(!showImageModal);
              }}
            >
              <div>
                <button
                  type="button"
                  onClick={() => setShowImageModal(!showImageModal)}
                >
                  X
                </button>
                <img src={modalImage ? modalImage : null} alt="#"></img>
              </div>
            </div>
          )}
          {/*END IMAGE MODAL*/}
          <div className="single-cafe-about-container">
            <div className="single-cafe-about-text-container">
              <h4>ABOUT</h4>
              <p>{cafe.about}</p>
              <h4 className="hbt">SERVICE OPTIONS</h4>
              <ul className="single-cafe-about-services-list">
                {cafe.serviceOptions.map((service) => {
                  return (
                    <li key={service}>
                      <span>{service}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="single-cafe-about-map-container">
              <h4>LOCATION</h4>
              <p>{cafe.address}</p>
              <iframe
                width="350"
                height="350"
                style={{ border: 0, borderRadius: "15px" }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:${cafe.placeId}&key=${process.env.REACT_APP_MAP_KEY}`}
              ></iframe>
            </div>
          </div>
          <div className="single-cafe-comments-container hbt">
            <h4>COMMENTS</h4>
            <CommentsDisplay id={id} />
          </div>
        </>
      )}
    </div>
  );
}

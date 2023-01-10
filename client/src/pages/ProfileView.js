import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CafeCard from "../components/CafeCard";
import "../styles/profileview.css";

export default function ProfileView() {
  const { id } = useParams();
  const [usrData, setUsrData] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/cafe/comment/find-user/${id}`)
      .then((res) => {
        // console.log("Comment.js", res.data);
        setUsrData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {usrData && (
        <div className="profile-view-main-container">
          <div className="profile-view-header-container">
            <img src={usrData.profileImage}></img>
            <div className="profile-view-about-container">
              <h3>{usrData.username}</h3>
              <p>{usrData.profileAbout}</p>
            </div>
          </div>
          <h3 className="profile-view-favorites-heading">Favorites</h3>
          {usrData.favorites && (
            <div className="profile-view-cafe-cards-display-container">
              {usrData.favorites.map((favorite) => {
                return (
                  <CafeCard
                    id={favorite._id}
                    image={favorite.images[0]}
                    images={favorite.images}
                    name={favorite.name}
                    city={favorite.city}
                    rating={favorite.rating}
                    cost={favorite.cost}
                    key={favorite._id}
                  ></CafeCard>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

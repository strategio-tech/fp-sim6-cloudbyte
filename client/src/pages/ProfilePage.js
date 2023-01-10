import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/auth.context";
import "../styles/profilepage.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [changeImage, setChangeImage] = useState(false);
  const [userData, setUserData] = useState(null);
  const [changeAboutToggle, setChangeAboutToggle] = useState(false);
  const [aboutText, setAboutText] = useState("");

  //function for image preview for uploading
  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  };

  //get user info from DB when component loads, save it to userData state
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/get-info`, {
        id: user._id,
      })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
        setAboutText(res.data.profileAbout);
      })
      .catch((err) => console.log(err));
  }, []);

  //function to submit the profile image on button click
  const handleImageSubmit = (e) => {
    e.preventDefault();
    setChangeImage(!changeImage);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/user/profile-picture/upload`,
        {
          image: profileImage,
          id: user._id,
          username: user.username,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  //function to submit the about text on button click
  const handleAboutSubmit = (e) => {
    e.preventDefault();
    setChangeAboutToggle(!changeAboutToggle);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/about-text/upload`, {
        id: user._id,
        aboutText: aboutText,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-image-container">
            {userData && (
              <img
                className="user-profile-image"
                src={userData.profileImage}
              ></img>
            )}
            <button onClick={() => setChangeImage(!changeImage)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
          {changeImage && (
            <div
              className="change-image-main-container"
              onClick={() => {
                setChangeImage(!changeImage);
              }}
            >
              <button className="change-image-close-modal-button">X</button>
              <div
                className="change-image-container"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <img src={profileImage}></img>
                <form onSubmit={handleImageSubmit}>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => {
                      console.log(e.target.files);
                      setImageFile(e.target.files[0]);
                      previewImage(e.target.files[0]);
                    }}
                  ></input>
                  <button className="change-image-save-button">Save</button>
                </form>
              </div>
            </div>
          )}
          <p className="profile-username">
            {isLoggedIn && <span>{user.username}</span>}
          </p>
        </div>
        <div className="profile-sub-header"></div>
        <div className="profile-about-main-container">
          <h5>About me:</h5>
          <div className="profile-about-text-container">
            {aboutText && <p>{aboutText}</p>}
            <button onClick={() => setChangeAboutToggle(!changeAboutToggle)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
          <Link
            to={`/users/${user._id}`}
            className="profile-view-profile-button"
          >
            View public profile
          </Link>
          {changeAboutToggle && (
            <div
              className="change-about-container"
              onClick={() => {
                setChangeAboutToggle(!changeAboutToggle);
              }}
            >
              <form
                onSubmit={handleAboutSubmit}
                onClick={(e) => e.stopPropagation()}
              >
                <textarea
                  value={aboutText}
                  onChange={(e) => setAboutText(e.target.value)}
                  className="change-about-textarea"
                ></textarea>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="button"
                    onClick={() => setChangeAboutToggle(!changeAboutToggle)}
                  >
                    Cancel
                  </button>
                  <button>Update</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

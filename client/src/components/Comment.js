import React, { useState, useEffect, useContext } from "react";
import "../styles/comment.css";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";
import { Link } from "react-router-dom";

export default function Comment(props) {
  const { commentText, date, name, userId, commentId } = props;
  const [usrData, setUsrData] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/cafe/comment/find-user/${userId}`
      )
      .then((res) => {
        // console.log("Comment.js", res.data);
        setUsrData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (e) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cafe/comment/${commentId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="comment-container" key={commentId}>
      <div className="comment-header-container">
        {usrData && (
          <Link to={`/users/${userId}`}>
            <img src={usrData.profileImage} alt="#"></img>
          </Link>
        )}
        <div className="comment-header-text">
          <h5>{name}</h5>
          <p>{date.slice(0, 10)}</p>
        </div>
      </div>
      <p className="comment-text">{commentText}</p>
      {user._id === userId ? (
        <form onSubmit={handleDelete}>
          <button className="delete-comment-button" onClick={handleDelete}>
            Delete
          </button>
        </form>
      ) : null}
    </div>
  );
}

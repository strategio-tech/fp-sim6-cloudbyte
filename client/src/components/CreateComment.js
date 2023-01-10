import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import axios from "axios";

export default function CreateComment(props) {
  const { user } = useContext(AuthContext); //user info, need img, id, name

  const { id } = props; //cafe ID

  const [commentText, setCommentText] = useState("");
  const [addCommentToggle, setAddCommentToggle] = useState(false);

  const handleSubmit = (e) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/cafe/comment/create`, {
        owner: user._id,
        commentText: commentText,
        date: new Date(),
        name: user.username,
        cafe: id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="create-comment-main-container">
      <button
        className="add-comment-button"
        style={{ padding: "5px 10px" }}
        onClick={() => {
          setAddCommentToggle(!addCommentToggle);
        }}
      >
        {" "}
        Add Comment
      </button>

      <div
        className="create-comment-form-container"
        onClick={() => setAddCommentToggle(false)}
        style={{
          height: !addCommentToggle ? 0 : "100vh",
          transition: "all 0.5s ease",
        }}
      >
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit}
          style={{
            display: addCommentToggle ? "block" : "none",
          }}
          className="create-comment-form"
        >
          <textarea
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
          ></textarea>
          <button>Post</button>
          <button
            type="button"
            onClick={() => setAddCommentToggle(!addCommentToggle)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

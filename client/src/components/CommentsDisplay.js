import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import axios from "axios";

export default function CommentsDisplay(props) {
  const { id } = props; //id of the cafe
  const [comments, setComments] = useState("");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/cafe/comment/get-comments/${id}`
      )
      .then((res) => {
        // console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="comments-display-main-container">
        {/*
        need to grab comments from DB
        save them to state
        map through the state, pass comment props through to them
        */}
        {comments.length === 0 && (
          <h3 style={{ marginBottom: "50px" }}>
            No comments yet.. be the first!
          </h3>
        )}
        {comments && (
          <>
            {comments.map((comment) => {
              return (
                <Comment
                  commentText={comment.commentText}
                  date={comment.date}
                  name={comment.name}
                  userId={comment.owner}
                  commentId={comment._id}
                />
              );
            })}
          </>
        )}
      </div>
      {/*
        Create comments below
    */}
      <CreateComment id={id} />
    </>
  );
}

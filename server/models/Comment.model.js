const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  commentText: String,
  date: String,
  name: String,
  cafe: {
    type: Schema.Types.ObjectId,
    ref: "Cafe",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

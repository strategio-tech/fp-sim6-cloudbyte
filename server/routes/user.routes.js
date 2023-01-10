const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

const User = require("../models/User.model");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

//POST profile picture upload
router.post("/profile-picture/upload", async (req, res) => {
  const { image, id, username } = req.body;
  const uploadedImage = await cloudinary.uploader.upload(
    image,
    {
      upload_preset: "unsigned_upload",
      public_id: `${username}--avatar`,
      allowed_formats: ["png", "jpg", "jpeg"],
    },
    function (error, result) {
      if (error) {
        console.log(error);
      }
      console.log(result);

      try {
        res.status(200).json(uploadedImage);
      } catch (err) {
        console.log(err);
      }
    }
  );
  User.findByIdAndUpdate(id, { profileImage: uploadedImage.url })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  console.log(uploadedImage);

  res.json({ message: "Hey its the server, I got the picture!" });
});

//POST user info
router.post("/get-info", (req, res) => {
  const { id } = req.body;
  User.findById(id)
    .then((foundUser) => res.json(foundUser))
    .catch((err) => res.json({ message: err }));
});

//POST update about text
router.post("/about-text/upload", (req, res) => {
  const { id, aboutText } = req.body;
  User.findByIdAndUpdate(id, { profileAbout: aboutText })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.json({ message: "Hey its the server, I got the about text!" });
});

module.exports = router;

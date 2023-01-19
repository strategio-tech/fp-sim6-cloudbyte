const express = require("express");
const router = express.Router();

// ℹ️ import models
const Cafe = require("../models/Cafe.model");
const Comment = require("../models/Comment.model");
const User = require("../models/User.model");

// ℹ️ set up routes
//POST cafe create
router.post("/new-cafe/create", (req, res) => {
  const { image, name, city, rating, cost } = req.body;

  //check for errors
  if (!image || !name || !city || !rating || !cost) {
    res.json({ error: "All fields are required" });
  }

  Cafe.findOne({ name })
    .then((foundCafe) => {
      //if cafe with same name exists - throw error
      if (foundCafe) {
        res.json({ error: "A cafe with that name already exists" });
      }

      return Cafe.create({
        image,
        name,
        city,
        rating,
        cost,
      });
    })
    .then((createdCafe) => {
      console.log(createdCafe);
      res.json({ cafe: createdCafe });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

//GET get list of cafes based on city
router.get("/find-all/:city", (req, res) => {
  const { city } = req.params;

  if (city == "all") {
    Cafe.find()
      .then((foundCafes) => {
        console.log(foundCafes);
        res.json({ cafes: foundCafes });
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: err });
      });
  } else {
    Cafe.find({ city: city })
      .then((foundCafes) => {
        console.log(foundCafes);
        res.json({ cafes: foundCafes });
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: err });
      });
  }
});

//GET route to get a single cafe based on ID
router.get("/find-one/:id", (req, res) => {
  const { id } = req.params;

  Cafe.findById(id)
    .then((foundCafe) => {
      console.log(foundCafe);
      res.json({ cafe: foundCafe });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

//POST route to create comment
router.post("/comment/create", (req, res) => {
  const { owner, commentText, date, image, name, cafe } = req.body;

  if (!commentText) {
    res.json({ error: "All fields are required" });
  }

  Comment.create({
    owner,
    commentText,
    date,
    image,
    name,
    cafe,
  })
    .then((createdComment) => {
      console.log(createdComment);
      res.json(createdComment);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});
//GET route to get comments for the cafe
router.get("/comment/get-comments/:id", (req, res) => {
  const { id } = req.params;
  Comment.find({ cafe: id })
    .then((foundComments) => {
      console.log(foundComments);
      res.json(foundComments);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

//GET route to get user info
router.get("/comment/find-user/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .populate("favorites")
    .then((foundUser) => {
      res.json(foundUser);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});
//DELETE comment route
router.delete("/comment/:id", (req, res) => {
  const { id } = req.params;
  Comment.findByIdAndDelete(id)
    .then((deletedComment) => {
      res.json({ message: "Deleted the comment" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});
//GET route to get uers comments for profile

//PUT route to add cafe to favorites
router.put("/add-favorite/:userId/:cafeId", (req, res) => {
  const { userId, cafeId } = req.params;
  User.findByIdAndUpdate(
    userId,
    { $push: { favorites: cafeId } },
    { new: true }
  )
    .then((updatedFavorite) => {
      res.json({ message: "PUT favorite worked", updatedFavorite });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});
//PUT route to remove cafe from favorites
router.put("/remove-favorite/:userId/:cafeId", (req, res) => {
  const { userId, cafeId } = req.params;
  User.findByIdAndUpdate(
    userId,
    { $pull: { favorites: cafeId } },
    { new: true }
  )
    .then((updatedFavorite) => {
      res.json({
        message: "PUT favorite worked - favorite has been removed",
        updatedFavorite,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

module.exports = router;

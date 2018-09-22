const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load profile model
const Profile = require("../../models/Profile");
//Load user profile
const User = require("../../models/User");

//@route GET api/profile/test
//@desc Tests profile route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

//@route GET api/profile
//@desc Get current users profile
//@access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "this is no profile for this error";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;

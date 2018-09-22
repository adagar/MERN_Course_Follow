const express = require("express");
const router = express.Router();

//@route GET api/profile
//@desc Tests profile
//@access Public

router.get("/test", (req, res) =>
  res.json({
    msg: "post works"
  })
);

module.exports = router;

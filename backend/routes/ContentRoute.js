const { addMovie } = require("../controllers/ContentController");
const express = require("express");
const router = express.Router();

router.post("/addmovie", addMovie);

module.exports = router;

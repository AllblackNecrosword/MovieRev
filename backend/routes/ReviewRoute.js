const express= require("express");
const router = express.Router();
const {sentReview}=require("../controllers/ReviewController");


router.post ("/sentReview",sentReview);

module.exports= router;

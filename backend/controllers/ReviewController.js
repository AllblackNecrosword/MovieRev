const reviewData = require("../models/ReviewModel");

const sentReview = async (req, res) => {
  // res.status(200).json({message:"Sent Review"})
  const { movieId, username, comment, rating } = req.body;
  if (!movieId || !username || !comment || !rating) {
    return res.status(404).json({ message: "Data missing" });
  }
  const review = await reviewData.create({
    movieId,
    username,
    comment,
    rating,
  });
  if (!review) {
    return res.status(400).json({ message: "Failed to create review" });
  }
  res.status(200).json(review);
};

module.exports = {
  sentReview,
};

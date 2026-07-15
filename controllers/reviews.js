const Listing = require("../models/listing");
const Review = require("../models/review");
module.exports.createReview = async (req, res) => {
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  await newReview.save();
  let listing = await Listing.findById(req.params.id);
  listing.reviews.push(newReview);
  await listing.save();
  req.flash("success", "Review created successfully !");
  res.redirect(`/listings/${listing._id}`);
};
module.exports.destroyReview = async (req, res) => {
  let { reviewId, id } = req.params;
  await Review.findByIdAndDelete(reviewId);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  req.flash("success", "Review deleted successfully !");
  res.redirect(`/listings/${id}`);
};

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSubSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  }
});

export default mongoose.model("UserReviews", reviewSubSchema);
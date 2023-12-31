import mongoose, { Schema } from "mongoose";

const  topicSchema = new Schema(
  {
   
    name: String,
    address: String,
    board: String,
    city: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;

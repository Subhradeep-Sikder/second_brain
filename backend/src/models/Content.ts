import mongoose, { Schema, Types } from "mongoose";

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { 
    type: String,
        enum: ["image", "video", "article", "audio", "document", "twitter", "youtube", "link"],
    required: true
  },
  title: { type: String, required: true },
  
    tags: [{ type: String }], 
  
  userId: { type: Types.ObjectId, ref: "User", required: true }
});

export const Content = mongoose.model("Content", contentSchema);
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;
console.log("Mongo URI:", process.env.MONGO_URI);

mongoose.connect(MONGO_URI)
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.log(err);
});
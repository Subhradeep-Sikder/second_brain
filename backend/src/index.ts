import dotenv from "dotenv";
dotenv.config();


import express from "express";
import "./config/db";
import cors from "cors";



import authRoutes from "./routes/authRoutes";
import contentRoutes from "./routes/contentRoutes";
import shareRoutes from "./routes/shareRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", authRoutes);
app.use("/api/v1/content", contentRoutes);
app.use("/api/v1", shareRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import 'dotenv/config';
import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import apiController from "./controllers/api.js";

const app = express();
app.use(express.json());

app.use("/api", apiController);

ViteExpress.listen(app, 3000, async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB...");
  console.log("Server is listening on port 3000...")
});

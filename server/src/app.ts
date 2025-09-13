import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import storyGenController from "./controller/storyGenController";
import imageModelKeyController from "./controller/imageModelKeyController";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/genstory", storyGenController);
app.get("/imagemodelkey", imageModelKeyController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

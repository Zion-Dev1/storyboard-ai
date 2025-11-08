import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import imageModelKeyController from "./controller/imageModelKeyController";
import genRouter from "./routes/genRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/gen", genRouter);
app.get("/imagemodelkey", imageModelKeyController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

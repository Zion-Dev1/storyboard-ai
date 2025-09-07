import express from "express";
import imageGenController from "../controller/storyGenController";

const router = express.Router();

router.get("/generate", imageGenController);

export default router;

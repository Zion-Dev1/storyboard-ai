import express from "express";
import imageGenController from "../controller/storyGenController";
import storyGenController from "../controller/storyGenController";

const router = express.Router();

router.get("/images", imageGenController);
router.get("/story", storyGenController);

export default router;

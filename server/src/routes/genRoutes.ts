import express from "express";
import genCharacterController from "../controller/genCharacterController";
import genStoryController from "../controller/genStoryController";

const router = express.Router();

router.get("/character", genCharacterController);
router.get("/story", genStoryController);

export default router;

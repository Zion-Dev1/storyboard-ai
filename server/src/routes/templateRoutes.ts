import express from "express";
import templateController from "../controller/imageGenController";

const router = express.Router();

router.get("/path", templateController);

export default router;

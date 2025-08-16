import express from "express";
import templateController from "../controller/templateController";

const router = express.Router();

router.get("/path", templateController);

export default router;

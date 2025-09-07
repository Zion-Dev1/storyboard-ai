"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageGenController_1 = __importDefault(require("../controller/imageGenController"));
const router = express_1.default.Router();
router.get("/generate", imageGenController_1.default);
exports.default = router;

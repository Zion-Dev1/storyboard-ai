"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const storyGenController_1 = __importDefault(require("../controller/storyGenController"));
const storyGenController_2 = __importDefault(require("../controller/storyGenController"));
const router = express_1.default.Router();
router.get("/image", storyGenController_1.default);
router.get("/story", storyGenController_2.default);
exports.default = router;

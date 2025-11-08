"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const genCharacterController_1 = __importDefault(require("../controller/genCharacterController"));
const genStoryController_1 = __importDefault(require("../controller/genStoryController"));
const router = express_1.default.Router();
router.get("/character", genCharacterController_1.default);
router.get("/story", genStoryController_1.default);
exports.default = router;

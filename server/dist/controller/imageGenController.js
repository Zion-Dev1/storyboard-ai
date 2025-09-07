"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default();
const imageGenController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInput = req.body.userInput;
        const response = yield openai.responses.create({
            model: "gpt-5",
            input: userInput,
            tools: [{ type: "image_generation" }],
        });
        return res.status(200).json({
            msg: "Image generated successfully.",
            results: response,
        });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
});
exports.default = imageGenController;

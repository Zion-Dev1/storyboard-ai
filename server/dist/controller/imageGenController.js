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
const openai_1 = __importDefault(require("../config/openai"));
const imageGenController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userInput } = req.body;
        const response = yield openai_1.default.images.generate({
            model: "gpt-image-1",
            prompt: "You are a cinematic illustrator. You will be given a short sentence. Generate a unique image that clearly visualizes the scene described. It should focus on the key characters, places, and actions mentioned in that sentence. Do not add text, captions, or numbers to the image. Use a consistent art style that matches the tone of the story. Ensure the image is detailed and visually engaging, suitable for a storyboard format. The sentence is: " +
                userInput,
            size: "512x512",
            n: 1,
        });
        return res.status(200).json({
            msg: "Image generated successfully.",
            results: response.data,
        });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
});
exports.default = imageGenController;

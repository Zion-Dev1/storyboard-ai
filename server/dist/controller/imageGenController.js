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
Object.defineProperty(exports, "__esModule", { value: true });
const genai_1 = require("@google/genai");
const ai = new genai_1.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
const imageGenController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userInput } = req.body;
        const response = yield ai.models.generateContent({
            model: "gemini-2.5-flash-image-preview",
            contents: 
        });
        const endpointUrl = 'https://modelslab.com/api/v7/images/text-to-image';
        const requestBody = {
            "prompt": "You are a cinematic illustrator. You will be given a short sentence. Generate a unique image that clearly visualizes the scene described. It should focus on the key characters, places, and actions mentioned in that sentence. Do not add text, captions, or numbers to the image. Use a consistent art style that matches the tone of the story. Ensure the image is detailed and visually engaging, suitable for a storyboard format. The sentence is: " +
                userInput,
            "model_id": "imagen-4",
            "aspect_ratio": "1:1",
            "key": "X26poiDJ4bNAmMzpHEr5lJV1GWJ8gQYOytCghYJ27eIuZeY0WYZSrLJzfzHG"
        };
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

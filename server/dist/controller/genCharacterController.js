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
const genCharacterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield openai_1.default.responses.create({
            model: "gpt-4o",
            input: [
                {
                    role: "system",
                    content: "You are tasked with generating a detailed visual description of a chracter. This character will be given to an AI bot, so the description should be good enough that if given the same character description prompt, the AI bot will recreate the same image. ",
                },
                {
                    role: "user",
                    content: "Generate a visual, detailed description of a random character. Make the chracter unique and have something to do (like a wizard or a cook or any profession). Keep it under 50 words. Focus on appearance, clothing, and accessories. Pick a gender. Avoid abstract traits or personality descriptions. Don't add to much to the character description, but everything you do add should be desribed to the max so that an AI bot can generate almost the same image given the description. ",
                },
            ],
        });
        const character = response.output_text;
        return res.status(200).json({
            msg: "Text generated successfully.",
            results: character,
        });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
});
exports.default = genCharacterController;

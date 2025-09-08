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
const storyGenController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield openai_1.default.responses.create({
            model: "gpt-4o",
            input: [
                {
                    role: "system",
                    content: `You are a cinematic storyteller. Write short, original stories in a storyboard format. Each sentence must describe a clear visual scene that could be illustrated. Keep the story around 6–10 sentences. Avoid abstract descriptions — focus on characters, places, and actions.`,
                },
                {
                    role: "user",
                    content: "Generate a new story.",
                },
            ],
        });
        const story = response.output_text;
        return res.status(200).json({
            msg: "Text generated successfully.",
            results: story,
        });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
});
exports.default = storyGenController;

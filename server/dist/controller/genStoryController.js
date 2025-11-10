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
const genStoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { character, numOfSlides } = req.body;
        const response = yield openai_1.default.responses.create({
            model: "gpt-4o",
            input: [
                {
                    role: "system",
                    content: `You are a cinematic storyteller. Write a short, original story and split it up in sentences in a storyboard format. Each sentence must describe a clear visual scene that could be illustrated.  Avoid abstract descriptions — focus on the character, places, and actions. Keep the story to ${numOfSlides} sentences. Make the story about one central character, but do not mention the description of this character. Just use it to create the scenes that would be relevant to him/her. Make sure this story is relevant to what the character is. Do not give a title and do not number the sentences. Don't give any styling or new lines in markdown. Just return the raw text.`,
                },
                {
                    role: "user",
                    content: `Generate a new story. The central character is ${character}.`,
                },
            ],
        });
        const story = response.output_text;
        const split = ((_a = story.match(/[^.!?]+[.!?]/g)) === null || _a === void 0 ? void 0 : _a.map((s) => s.trim())) || [];
        return res.status(200).json({
            msg: "Story generated successfully.",
            results: split,
        });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
});
exports.default = genStoryController;

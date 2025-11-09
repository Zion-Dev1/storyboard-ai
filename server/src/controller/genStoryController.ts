import { Request, Response } from "express";
import client from "../config/openai";

const genStoryController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const character = req.body.character;

    const response = await client.responses.create({
      model: "gpt-4o",
      input: [
        {
          role: "system",
          content:
            "You are a cinematic storyteller. Write a short, original story and split it up in sentences in a storyboard format. Each sentence must describe a clear visual scene that could be illustrated. Keep the story around 5 sentences. Make the story about one central character, but do not mention the description of this character. Just use it to create the scenes that would be relevant to him/her. Avoid abstract descriptions — focus on the character, places, and actions. Do not give a title and do not number the sentences. Don't give any styling or new lines in markdown. Just return the raw text.",
        },
        {
          role: "user",
          content: `Generate a new story. The central character is ${character}.`,
        },
      ],
    });

    const story = response.output_text;
    const split = story.match(/[^.!?]+[.!?]/g)?.map((s) => s.trim()) || [];

    return res.status(200).json({
      msg: "Story generated successfully.",
      results: split,
    });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default genStoryController;

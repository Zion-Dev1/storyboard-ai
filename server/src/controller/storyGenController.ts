import { Request, Response } from "express";
import client from "../config/openai";

const storyGenController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await client.responses.create({
      model: "gpt-4o",
      input: [
        {
          role: "system",
          content: `You are a cinematic storyteller. Write short, original stories in a storyboard format. Each sentence must describe a clear visual scene that could be illustrated. Keep the story around 3 sentences. Avoid abstract descriptions — focus on characters, places, and actions. Do not give a title and do not number the sentences. Don't give any styling or new lines in markdown. Just return the raw text.`,
        },
        {
          role: "user",
          content: "Generate a new story.",
        },
      ],
    });

    const story = response.output_text;
    const split = story.match(/[^.!?]+[.!?]/g)?.map(s => s.trim()) || [];

    return res.status(200).json({
      msg: "Text generated successfully.",
      results: split,
    });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default storyGenController;

import { Request, Response } from "express";
import client from "../config/openai";

const genCharacterController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await client.responses.create({
      model: "gpt-4o",
      input: [
        {
          role: "user",
          content:
            "Generate a visual, detailed description of a random character. Make the chracter unique and have something to do (like a wizard or a cook or any profession). Keep it under 50 words. Focus on appearance, clothing, and accessories. Avoid abstract traits or personality descriptions. Everything you add to the description should be visually described to the max so that an AI bot can generate almost the same image given the description.",
        },
      ],
    });

    const character = response.output_text;

    return res.status(200).json({
      msg: "Text generated successfully.",
      results: character,
    });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default genCharacterController;

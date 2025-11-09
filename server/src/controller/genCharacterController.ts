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
          role: "system",
          content:
            "You are tasked with generating a detailed visual description of a chracter. This character will be given to an AI bot, so the description should be good enough that if given the same character description prompt, the AI bot will recreate the same image. ",
        },
        {
          role: "user",
          content:
            "Generate a visual, detailed description of a random character. Make the chracter unique and have something to do (like a wizard or a cook or any profession). Keep it under 50 words. Focus on appearance, clothing, and accessories. Pick a gender. Avoid abstract traits or personality descriptions. Don't add to much to the character description, but everything you do add should be desribed to the max so that an AI bot can generate almost the same image given the description. ",
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

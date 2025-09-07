import { Request, Response } from "express";
import OpenAI from "openai";

const openai = new OpenAI();

const imageGenController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userInput = req.body.userInput;

    const response = await openai.responses.create({
      model: "gpt-5",
      input: userInput,
      tools: [{ type: "image_generation" }],
    });

    return res.status(200).json({
      msg: "Image generated successfully.",
      results: response,
    });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default imageGenController;

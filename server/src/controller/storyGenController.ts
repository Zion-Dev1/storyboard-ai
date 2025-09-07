import { Request, Response } from "express";
import client from '../services/openai';

const storyGenController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userInput = req.body.userInput;

    const response = await client.responses.create({
      model: "gpt-5",
      input: userInput,
    });

    return res.status(200).json({
      msg: "Text generated successfully.",
      results: response,
    });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default storyGenController;

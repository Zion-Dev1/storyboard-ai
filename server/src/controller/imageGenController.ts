import { Request, Response } from "express";
import client from "../config/openai";

const imageGenController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { userInput } = req.body;

    const response = await client.images.generate({
      model: "gpt-image-1",
      prompt:
        "You are a cinematic illustrator. You will be given a short sentence. Generate a unique image that clearly visualizes the scene described. It should focus on the key characters, places, and actions mentioned in that sentence. Do not add text, captions, or numbers to the image. Use a consistent art style that matches the tone of the story. Ensure the image is detailed and visually engaging, suitable for a storyboard format. The sentence is: " +
        userInput,
      size: "512x512",
      n: 1,
    });

    return res.status(200).json({
      msg: "Image generated successfully.",
      results: response.data,
    });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default imageGenController;

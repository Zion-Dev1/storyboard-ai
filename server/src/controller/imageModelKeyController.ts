import { Request, Response } from "express";

const imageModelAuthController = async (req: Request, res: Response): Promise<any> =>
  res.status(200).json({
    msg: " generated successfully.",
    results: process.env.IMAGEN_MODEL_AUTH_KEY,
  });

export default imageModelAuthController;

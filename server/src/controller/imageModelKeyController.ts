import { Request, Response } from "express";

const imageModelAuthController = async (
  req: Request,
  res: Response
): Promise<any> => {
  return res.status(200).json({
    msg: "Key sent successfully.",
    results: process.env.IMAGEN_MODEL_AUTH_KEY,
  });
};

export default imageModelAuthController;

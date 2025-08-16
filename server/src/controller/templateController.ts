import { Request, Response } from "express";

const templateController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    return res.status(200).json({
      msg: "Response generated successfully.",
      results: response,
    });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default templateController;

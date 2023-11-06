import { NextApiRequest, NextApiResponse } from "next";
import Database from "@/database/db";

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new Database();
  const id = req.query.id as string;
  const entry = await db.getById(id);

  res.status(200).json(entry);
  //   res.statusCode = 200;
  //   res.setHeader("content-type", "application/json");
  //   res.end(JSON.stringify({ data: entry }));
};

export default AvoDetail;

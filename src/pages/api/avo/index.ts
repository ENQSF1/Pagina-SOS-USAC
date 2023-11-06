import Database from "@/database/db";
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const database = new Database();
  const allEntries = await database.getAll();
  res.status(200).json(allEntries);
};

export default allAvos;

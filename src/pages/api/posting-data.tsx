import { getAllProjects } from "@/lib/my-project-data";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const projectData = getAllProjects();

    return res.status(201).json({ msg: "good", projectData });
  } else {
    return res.status(500).json({ msg: "you can access." });
  }
};

export default handler;

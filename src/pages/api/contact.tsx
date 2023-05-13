import { ReqBody, ResBody } from "@/type/interface";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const MONGO_DATABASE = process.env.mongodb_database;
const MONGO_URL = `mongodb+srv://${process.env.mongodb_userName}:${process.env.mongodb_password}@${process.env.mongodb_cluster_name}.cfmmcms.mongodb.net`;
const mongoClient = new MongoClient(MONGO_URL);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, name, message }: ReqBody = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ msg: "Invalid form." });
    }

    const newMessage: ResBody = { email, name, message };

    try {
      await mongoClient.connect();

      const db = mongoClient.db(MONGO_DATABASE);
      const result = await db.collection("messages").insertOne(newMessage);

      newMessage.id = result.insertedId;

      return res.status(201).json({ msg: "Success stored msg.", newMessage });
    } catch (err) {
      await mongoClient.close();
      return res.status(500).json({ msg: "Internal Server Error" });
    } finally {
      await mongoClient.close();
    }
  }
};

export default handler;

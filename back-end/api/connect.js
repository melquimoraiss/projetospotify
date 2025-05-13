import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://melqui:1069Mm@cluster0.atzwjb6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("projetospotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);

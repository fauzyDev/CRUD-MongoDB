import { MongoClient } from "mongodb";
import dotenv from "dotenv"
dotenv.config()

// Replace the uri string with your connection string.
const uri = process.env.DB_CONNECT;

const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect()
    const database = client.db('project')
    return database

  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  } 
}
connectDB().catch(console.dir);
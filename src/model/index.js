import { connectDB } from "../config/database.js";

export async function userCollection() {
    const database = await connectDB()
    const data = database.collection('users');
    return data
} 
import { userCollection } from "../model/index.js";
import { userSchema, Schema, validateUser } from "../model/userModel.js";
import { response } from "../res/costumResponse.js";

export const getUser = async (req, res) => {
    try {
        const collection = await userCollection(); 
        const users = await collection.find({}).toArray()
        console.log(users);
        response(200, users, "success", res)
    } catch (error) {
        response(500, { message: "Failed" }, error,"Error Fetch data", res)
    }
};

export const createUser = async (req, res) => {
    const input = req.body;
    const userData = Schema(userSchema, input)

    const errors = validateUser(userData);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    try {
        const collection = await userCollection(); 
        const users = await collection.insertOne(userData)
        console.log(users);
        response(200, users, "success", res)
    } catch (error) {
        response(500, { message: "Failed" }, error,"Error Fetch data", res)
    }
};

import { ObjectId } from "mongodb";
import { userCollection } from "../model/index.js";
import { userSchema, Schema, validateUser } from "../model/userModel.js";
import { response } from "../res/costumResponse.js";

export const getUser = async (req, res) => {
    try {
        const collection = await userCollection(); 
        const users = await collection.find({}).toArray()
        response(200, users, "success", res)
    } catch (error) {
        response(500, { message: "Failed" }, error, res)
    }
};

export const createUser = async (req, res) => {
    const input = req.body;
    const userData = Schema(userSchema, input)

    const errors = validateUser(userData);
    if (errors.length > 0) {
      return response(500, { errors }, "Terjadi Masalah", res);
    }

    try {
        const collection = await userCollection(); 
        const users = await collection.insertOne(userData)
        console.log(users);
        response(200, users, "success", res)
    } catch (error) {
        response(500, { message: "Failed" }, error, res)
    }
};

export const updateUser = async (req, res) => {
    try {
    const collection = await userCollection();
    const { id, ...input } = req.body;

    const myObjectId = ObjectId.createFromHexString(id);
        
    const userData = Schema(userSchema, input)

    const errors = validateUser(userData);
    if (errors.length > 0) {
      return response(500, { errors }, "Terjadi kesalahan", res)
    }
        const users = await collection.updateOne(
            { _id: myObjectId }, 
            { $set: userData }
        )
        console.log("update",users);
        response(200, users, "success", res)
    } catch (error) {
        response(500, { message: "Failed" }, error, res)
    }
};

export const deleteUser = async (req, res) => {
    try {
    const collection = await userCollection();
    const { id, ...input } = req.body;

    const myObjectId = ObjectId.createFromHexString(id);
        
    const userData = Schema(userSchema, input)

    const errors = validateUser(userData);
    if (errors.length > 0) {
      return response(500, { errors }, "Terjadi kesalahan", res)
    }
        const users = await collection.updateOne(
            { _id: myObjectId }, 
            { $set: userData }
        )
        console.log("update",users);
        response(200, users, "success", res)
    } catch (error) {
        response(500, { message: "Failed" }, error, res)
    }
};

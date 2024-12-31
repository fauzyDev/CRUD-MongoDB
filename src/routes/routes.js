import express from "express"
import { response } from "../res/costumResponse.js"
import { getUser, createUser, updateUser, deleteUser } from "../controller/controller.js"

export const router = express.Router()
router.get('/api', getUser, async (req, res) => {
    response(200, { data: "sucess" }, "Done", res)
})
router.post('/api', createUser, async (req, res) => {
    response(201, { data: "create sucess" }, "Done", res)
});
router.put('/api', updateUser, async (req, res) => {
    response(201, { data: "update sucess" }, "Done", res)
});
router.delete('/api', deleteUser, async (req, res) => {
    response(200, { data: "delete sucess" }, "Done", res)
});
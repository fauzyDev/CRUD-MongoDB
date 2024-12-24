import express from "express"
import { response } from "../res/costumResponse.js"
import { getUser, createUser, updateUser } from "../controller/controller.js"

export const router = express.Router()
router.get('/api/cek', async (req, res) => {
    response(200, { data: true }, "cek", res)
})

router.get('/api', getUser);
router.post('/api', createUser);
router.put('/api', updateUser)
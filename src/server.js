import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/database.js';
import { router } from './routes/routes.js';
import { response } from './res/costumResponse.js';

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB()
app.get('/', (req, res) => {
    response(200, { connect: true }, 'API CRUD MongoDB Ready!🚀', res)
})

app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
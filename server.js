import express from 'express'
import cors from 'cors'
import { mongoConnect } from './config.js';
import auth from './Routes/auth.js'
import jobs from './Routes/jobs.js'
import users from './Routes/users.js'
mongoConnect();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", auth)
app.use("/api/v1/jobs", jobs)
app.use("/api/v1/users", users)
app.get("/", (req, res) => {
    res.send("hello World")
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on ${port}`));
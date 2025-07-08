import express from 'express'
import { getUsers, getUser } from '../Controller/UsersController.js';
import {protect} from '../Middleware/auth.js'

const router = express.Router();
router.use(protect)

router.get("/", (req, res) => {
    res.send("Yello")
})

router.get("/users", getUsers)
router.get("/user", getUser)

export default router;
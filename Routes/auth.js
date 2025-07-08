import express from 'express'
import { login, register } from '../Controller/AuthController.js'


const router = express.Router()

router.get("/", (req, res) => {
    res.send('')
})

router.post("/register", register)
router.post("/login", login)


export default router;
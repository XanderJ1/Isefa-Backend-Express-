import express from 'express'
import { createJob, getJobs } from '../Controller/JobController.js';
import { protect } from '../Middleware/auth.js';

const router = express.Router();

router.use(protect)
router.post("/create", createJob);
router.get("", getJobs);


export default router;
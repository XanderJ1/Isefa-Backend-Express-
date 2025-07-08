import Job from "../Models/Job.js";

export const createJob = async (req, res) => {
    try {       
        if (req.user.role !== 'recruiter') {
            return res.status(401).send("You must be a recruiter to create a job listing");
        }
        const userId = req.user.id;
        const {title, description, createdAt, company, location, salary} = req.body;
        if (!title || !description) {
        return res.status(400).send("Enter title, description and user");
    }

    const newJob = new Job({
        title, description, createdBy: userId, createdAt, company, location, salary
    })

    await newJob.save();
    res.send(newJob)
    } catch (err) {
        res.status(500).json({ message: "Failed to create job", error: err.message });
    }
}

export const getJobs = async (req, res) => {
    const jobs = await Job.find();
    res.send(jobs)
}

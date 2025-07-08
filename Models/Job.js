import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now,
    },
    company: String,
    location: String,
    salary: {
        type: String,
        default: 'unknown'
    },
    apllications: {
        type: Array,
    }
});

export default mongoose.model("Job", jobSchema);
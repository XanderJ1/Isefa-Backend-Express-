import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
    type: String,
    required: true,
    },
    role: {
        type: String,
        enum: ['job_seeker', 'recruiter', 'admin'],
        default: 'job_seeker',
    },
    bio: String,
    company: String,
    resumeUrl: String,
    createdAt: {
        type:Date,
        default : Date.now,
    }
});

export default mongoose.model('User', userSchema)
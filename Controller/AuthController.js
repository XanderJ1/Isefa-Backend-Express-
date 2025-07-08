import User from '../Models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    console.log(req.body);
    
    const {name, email, password, role, bio, company,resumeUrl} = req.body;
    if(!name || !email || !password){
        return res.status(400).send("Enter name, password, and email")
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.send("User already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    

    const newUser = new User({
        name, email, password:hashedPassword, role, bio, company,resumeUrl,
    })

    await newUser.save();    
    res.status(201).json({ message: "User created successfully", user: newUser });

}

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        if (!email || !password) {
            return res.status(400).send("Enter email and password")
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).send(`User with email: ${email} is not registered`)
        }
        const isMatch = await bcrypt.compare(password, user.password)
        
        if (!isMatch) {
            return res.status(401).send("Invalid credentials");
        }

        const JWT_SECRET = process.env.JWT_SECRET
        const token = jwt.sign(
        { id: user._id, role: user.role },
        JWT_SECRET,
        { expiresIn: '2d' }
);
        
        res.json({message: "Login succesfull", token})
        
    } catch (error) {
        res.status(500).send({msg:"Internal server error", error: error.message})
    }
}
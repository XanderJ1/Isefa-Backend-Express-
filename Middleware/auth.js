import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send("Unauthorized: no token provided")
    }
    
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
        console.log(decoded);
        
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized: Invalid token' });

    }

} 
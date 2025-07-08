import User from '../Models/User.js'

export const getUsers = async (req, res)=> {
    const users = await User.find();
    res.send(users)
}

export const getUser = async (req, res)=> {

    const userId = req.user.id;
    const user = await User.findOne({_id: userId});    
    res.send(user)
}

export const updateUser = async (req, res)=> {
    const users = await User.find();
    res.send(users)
}

export const deleteUser = async (req, res)=> {
    const users = await User.find();
    res.send(users)
}

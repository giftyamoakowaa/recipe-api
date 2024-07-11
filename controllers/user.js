import bcrypt from "bcrypt";
import { userModel } from "../models/user.js";

export const register = async (req, res, next) => {
    try {
        //  Hash the user's password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        // create a new user
       const user = await userModel.create({
            ...req.body,
            password: hashedPassword
        })
        // Generate a session 
        req.session.user = { id: user.id }
        // Return response
        res.status(201).json('user registered successfully');

    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, username, phone, password } = req.body;
    // Find a user using their unique identifier
    const user = await userModel.findOne({ $or: [
        {email:email},
        {username: username},
        {phone:phone}
    ] });
    if (!user) {
        res.status(401).json('No user found');
    } else {
        // Verify thier password
        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) {
            res.status(401).json('Invalid credentials');
        } else {
            // Generate a session 
            req.session.user = { id: user.id }
            //   Return response
            res.status(200).json('login successful');
        }

    }
    } catch (error) {
        next(error);
    }

}

export const logout = async (req, res, next) => {
    try {
        // Destroy User session
    await req.ssion.destroy();
    // Return response
    res.status(200).json('logout succesfully')
    } catch (error) {
        next(error);
    }
}

export const profile = async (req, res, next) => { 
    try {
        // Find a user by id
    const user = await userModel
    .findById(req.session.user.id)
    .select({ password: false});
    // Return response
    res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
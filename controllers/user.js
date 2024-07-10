import bcrypt from "bcrypt";
import { userModel } from "../models/user.js";

export const register = async (req, res, next)=>{
    try {
         //  Hash the user's password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    // create a new user
     await userModel.create({
        ...req.body, 
        password:hashedPassword
    })
    // Return response
    res.status(201).json('user registered successfully');

    } catch (error) {
        
    }
}
   
const login = async()=>{}

const logout = async()=>{

}

const profile = async()=>{}
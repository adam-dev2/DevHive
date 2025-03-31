import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async(req,res) => {
    const {name,email,password} = req.body;

    try{
        const userExists = await User.findOne({email})
        if(userExists) {
            console.log(userExists)
            return res.status(400).json({message: 'Email already Exists'});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({name,email,password: hashedPassword});

        res.status(201).json({message: "User Registered", userId: newUser._id})
    }catch(error) {
        res.status(500).json({message: `Got this error: ${error}`})
    }
}

export const loginUser = async(req,res) => {
    const {email,password} = req.body; 

    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword) {
            return res.status(401).json({message: "Invalid Password"});
        }

        const token = jwt.sign({userId: user._id},process.env.JWT_SECRET,{expiresIn:'1h'});

        res.status(200).json({message: "Login Successful",token})
    }catch(error) {
        res.status(500).json({message:"Server Error", err:`${error}`})
    }
}
import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";
import { generateToken } from "../utils/jwt";

const router = express.Router();

router.post("/signup", async (req,res) => {

  const {username,password} = req.body;

  const existingUser = await User.findOne({username});

  if(existingUser){
    return res.status(403).json({
      message:"User already exists"
    });
  }

  const hashedPassword = await bcrypt.hash(password,10);

  await User.create({
    username,
    password:hashedPassword
  });

  res.json({
    message:"User created"
  });

});

router.post("/signin", async (req,res) => {

  const {username,password} = req.body;

  const user = await User.findOne({username});

  if(!user){
    return res.status(403).json({
      message:"User not found"
    });
  }

  const valid = await bcrypt.compare(password,user.password);

  if(!valid){
    return res.status(403).json({
      message:"Invalid password"
    });
  }

  const token = generateToken(user._id.toString());

  res.json({
    token
  });

});

export default router;
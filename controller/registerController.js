// this controllar basacally authticate the user and ad all the user details 

import { HashPassward,ComparePassword } from "../helper/AuthHelper.js"
import userModel from "../models/Users.js"
import JWT from "jsonwebtoken"

 // FOR LOGIN 
 export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await ComparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET,{expiresIn: "7d",});
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// test controller



 export const testController =(req,res)=>{
res.send("procted routs")
}
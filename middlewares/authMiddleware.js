import  JWT  from "jsonwebtoken";
import userModel from "../models/Users.js"

export const requireSignIn = async(req,res,next)=>{
    try {
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
        next()
        
    } catch (error) {
        console.log(error)
    }

}


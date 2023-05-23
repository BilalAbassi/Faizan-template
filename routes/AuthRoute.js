import  express  from "express";
import { loginController} from "../controller/registerController.js";
import {requireSignIn} from "../middlewares/authMiddleware.js"


 // this file is for router 

 // register (post methord will be used for this ) || Post 

 const router = express.Router();


 

 router.post("/login",loginController)


 //protected route auth for user 
 router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

 //protected route auth for admin
 






 export default router
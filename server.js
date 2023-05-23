import  express, { json } from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import  authRoutes from "./routes/AuthRoute.js"
import  cors  from "cors"
import path from "path"
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// we give the name auth over self.

// for getting .env file data 
dotenv.config()

// for database connection 


connectDB()

// createing a variable for express 
const app=express()

// using meddleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use(express.static(path.join(__dirname,"./client/dist")))
app.get("/",(req,res)=>{res.sendFile("./client/dist/index.html")})

// routes 
app.use("/api/v1/auth", authRoutes);



const port=process.env.PORT || 8080 || 5000 || 5173

app.listen(port)
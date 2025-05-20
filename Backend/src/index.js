import express from "express"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser"
import connectDB from "./db/index.js";
import userRouter from "./routes/user.route.js";
import orderRouter from "./routes/order.route.js";
import connectCloudinary from "./utils/cloudinary.js";

const app = express();

const port = process.env.PORT || 4000


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

connectCloudinary()

connectDB().then(()=>{
    app.listen(port,(req,res)=>{
        console.log(`⚙️ Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

app.use('/api/user',userRouter)
app.use('/api/order',orderRouter) 
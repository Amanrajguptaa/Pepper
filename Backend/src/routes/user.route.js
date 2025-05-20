import express from "express"
import { loginUser, registerUser, updateUser } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.js"

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/edit-profile',upload.single('image'),updateUser)
userRouter.get('/place-order', (req, res) => {
    res.send("User route")
}
)

export default userRouter
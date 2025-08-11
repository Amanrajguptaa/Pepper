import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        default:"Not Selected"
    },
    dob:{
        type:String,
        default:"Not Selected"
    },
    phone:{
        type:String,
        default:"0000000000"
    },
    address:{
        street: { type: String, default: "" },
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        zip: { type: String, default: "" },
        country: { type: String, default: "" }
    },
  cartData: [
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1
    }
  }
]
})


const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel
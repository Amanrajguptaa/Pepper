import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim: true
    },
    image:{
        type:String,
        default:"",
        required:true
    },
    price:{
        type:Number,
        required:true,
        min: 0
    },
    ingredients:{
        type:Array,
        default:[]
    },
    nutrients :{
        type:Object,
        default:{}
    },
    allergens:{
        type:Array,
        default:[]
    },   
})


const productModel = mongoose.models.product || mongoose.model('product',productSchema)

export default productModel
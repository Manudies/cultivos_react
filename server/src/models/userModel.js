import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    email :{
        type: String,
        require:true,
        unique: true,
    },
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        
    }, 
    role: {
        type:String,
        enum: ["user","jardinero", "admin"],
        default: "user"
    },
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments" 
        }
    ]
})

const userModel = mongoose.model ("user", userSchema);

export default userModel;
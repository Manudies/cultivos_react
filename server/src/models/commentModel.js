import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    post: {
        type: String,
        require: true
    },
    user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
    
    cultivation:
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cultivations"
        }
})  


const commentModel = mongoose.model ("comment", commentSchema);

export default commentModel;
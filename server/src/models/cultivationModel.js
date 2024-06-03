import mongoose from "mongoose";

const cultivationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    seedtime: {
        type: String,
        enum: ["summer","autumn","winter","spring"],
        require: true,
        default: "spring"
    },
    image: {
        type: String,
        require: false
    },
    // //TODO Tabla de plagas
    // plague: {
    //     type: String,
    //     require: false
    // },
    // //TODO Usuarios guardan a cultivos favoritos
    // users: [
    //     {
    //         type: mongoose.Schema.ObjectId,
    //         ref: "users"
    //     }
    // ]
})  


const cultivationModel = mongoose.model("cultivation",cultivationSchema);

export default cultivationModel;
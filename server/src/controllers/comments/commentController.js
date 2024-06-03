import commentModel from "../../models/commentModel.js";
import userController from "../users/userController.js";
import cultivationController from "../cultivations/cultivationController.js";

const getAll = async(userId)=> {
    try {
        const comments = await commentModel.find({users:userId});
        return comments;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const comment = await commentModel.findById(id);
        return comment;
    } catch (error) {
        console.error(error);
        return null;  
    }
}

const getByProperty = async(property,value) =>{
    try {
        const comment = await commentModel.find({[property]:value})
        return comment;
    } catch (error) {
        return null;
    }
}

const getByuserId = async(userId) =>{
    try {
        const comment = await commentModel.find({user:userId})
        return comment;
    } catch (error) {
        return null;
    }
}

const create = async(data) =>{
    try {
        const comment = await commentModel.create(data);
        return comment;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const comment = await commentModel.findByIdAndUpdate(id,data);
        return comment;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const comment = await commentModel.findByIdAndDelete(id);
        return comment;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export const functions = {
    getAll,
    getById,
    getByProperty,
    getByuserId,
    create,
    update,
    remove,
}

export default functions;
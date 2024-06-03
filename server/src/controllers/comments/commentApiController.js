import userApiController from "../users/userApiController.js";
import commentController from "./commentController.js";
import cultivationController from "../cultivations/cultivationController.js";

const getAll = async(req,res)=>{
    const comments = await commentController.getAll();
    res.json({data:comments});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const comment = await commentController.getById(id);
    res.json({data:comment});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const comments = await commentController.getByProperty(property,value);
    res.json({data:comments})
}

const getByuserId=async(req,res)=>{
    const {userId}=req.params;
    const comments = await commentController.getByuserId(userId);
    res.json({data:comments})
}

const create = async(req,res)=>{
    const userId = req.user._id;
    const data = req.body;
    data.user = userId
    console.log(userId);
    const comment = await commentController.create(data);
    res.json({data:comment});
}

const update = async(req,res)=>{
    const id =req.params.id;
    const comment = await commentController.update(id,req.body);
    res.json({data:comment})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const comment = await commentController.remove(id);
    res.json({data:comment})
}

export default{
    getAll,
    getById,
    getByProperty,
    getByuserId,
    create,
    update,
    remove
}
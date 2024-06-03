import cultivationController from "../../controllers/cultivations/cultivationController.js";

const getAll = async(req,res)=>{
    const cultivations = await cultivationController.getAll();
    res.json({data:cultivations});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const cultivation = await cultivationController.getById(id);
    res.json({data:cultivation});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const cultivations = await cultivationController.getByProperty(property,value);
    res.json({data:cultivations})
}

const create = async(req,res)=>{
    const cultivation = await cultivationController.create(req.body);
    res.json({data:cultivation})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const cultivation = await cultivationController.update(id,req.body);
    res.json({data:cultivation})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const cultivation = await cultivationController.remove(id);
    res.json({data:cultivation})
}

export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}


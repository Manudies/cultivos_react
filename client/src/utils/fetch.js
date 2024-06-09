import { getToken } from "./local";

const API_URL = import.meta.env.VITE_BACKEND_URL

const fetchData = async(route,method,inputData=null)=>{
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method:method,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post" || method === "put" || method === "patch"){
            fetchOptions.body = JSON.stringify(inputData);
        }
    }
    try {
        const result = await fetch(url.toString(),fetchOptions);
        const data  = await result.json();
        return data;
    } catch (error) {
        console.error(error);
        return ({error:error.message})
    }
}

const register = async(userData)=>{
    const result = await fetchData("/register","post",userData);
    return result;
}
const login = async(userData)=>{
    const result = await fetchData("/login","post",userData);
    console.log("login",result);
    return result;
}
const getUserData = async()=>{
    const result = await fetchData("/users/bytoken","get");
    return result;
}
const getCultivations = async()=>{
    const result = await fetchData("/cultivations","get");
    console.log("getCultivations",result);
    return result;
}
const getCultivation = async(id)=>{
    const result = await fetchData("/cultivations/"+id,"get");
    return result;
}
const createCultivation = async(cultivationData)=>{
    const result = await fetchData("/cultivations","post",cultivationData);
    return result;
}

const removeCultivation = async(id)=>{
    const result = await fetchData("/cultivations/"+id,"delete");
    return result;
}
const updateCultivation = async(id,cultivationData)=>{
    const result = await fetchData("/cultivations/"+id,"put",cultivationData);
    return result;
}

export {
    register,
    login,
    getCultivations,
    getCultivation,
    createCultivation,
    getUserData,
    removeCultivation,
    updateCultivation
}
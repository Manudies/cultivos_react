import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import commentController from "../../src/controllers/comments/commentController.js";

const commentData = {
    post:"mipost",
}
//TODO: Pulir test de comentarios

// describe("Test de commentController",()=>{
//     beforeAll(async ()=>{
//         await connectDB();
//         await mongoose.connection.collections["comments"].drop();
//     })
//     afterAll(async()=>{
//         await mongoose.connection.close();
//     })

//     test("añadir comentario",async()=>{
//         const comment = await commentController.create(commentData);
//         expect(comment.post).toEqual(commentData.post);
//     })
//     test("actualizar comentario",async()=>{
//         const comments= await commentController.update("post","el nuevo post");
//         const comment = comments[0];
//         expect(comments.length).toBeGreaterThanOrEqual(1);
//         expect(comment.post).toEqual("el nuevo post");
//     })
//     test("buscar comentario por id",async()=>{
//         const comments= await commentController.getByProperty("post","el nuevo post");
//         const newcomment = await commentController.getById(comments[0]._id);
//         expect(newcomment).not.toBeNull();
//         expect(comment.post).toEqual("el nuevo post");
//     })
//     test("borrar comentario",async()=>{
//         const comments= await commentController.getByProperty("post","el nuevo post");
//         const removecomment = await commentController.getById(comments[0]._id);
//         expect(removecomment).not.toBeNull();
//         expect(comments.length).toEqual(0);
//     })
    
// })
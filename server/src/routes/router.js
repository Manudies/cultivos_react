
import {Router} from "express";

import userRouter from "./userRouter.js";
import cultivationRouter from "./cultivationRouter.js";
import commentRouter from "./commentRouter.js";
import authRouter from "./authRouter.js";
import { isAdmin, isAuthenticated } from "../middlewares/authMiddleware.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/users",userRouter);
router.use("/cultivations",cultivationRouter);
router.use("/comments",isAuthenticated,commentRouter);
router.use("/",authRouter)

export default router;
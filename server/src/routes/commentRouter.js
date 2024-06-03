import {Router} from "express";
import { isAdmin, isAuthenticated } from "../middlewares/authMiddleware.js";
import commentApiController from "../controllers/comments/commentApiController.js";


const router  = Router();

router.get("/",isAdmin,commentApiController.getAll);
router.get("/byproperty",isAdmin,commentApiController.getByProperty);
router.get("/byuserid/:userId",isAuthenticated,commentApiController.getByuserId);
router.get("/:id",isAdmin,commentApiController.getById);
router.post("/",commentApiController.create);
router.put("/:id",commentApiController.update);
router.delete("/:id",commentApiController.remove);

export default router;

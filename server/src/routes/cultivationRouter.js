import {Router} from "express";
import { isAdmin, isAuthenticated } from "../middlewares/authMiddleware.js";

import cultivationApiController from "../controllers/cultivations/cultivationApiController.js";


const router  = Router();

router.get("/",cultivationApiController.getAll);
router.get("/byproperty",cultivationApiController.getByProperty);
router.get("/:id",cultivationApiController.getById);
router.post("/",isAdmin,cultivationApiController.create);
router.put("/:id",isAdmin,cultivationApiController.update);
router.delete("/:id", isAdmin,cultivationApiController.remove);

export default router;
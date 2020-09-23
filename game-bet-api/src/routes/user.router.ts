import {Router} from "express";
import UserController from "@controllers/user.controller";


const router = Router();
const userController = new UserController();


router.post("/add/:userId", [userController.insert]);
router.get("/show/:userId", [userController.findById]);
router.patch("/update/:userId", [userController.patchById]);
router.delete("/remove/:userId", [userController.remove]);

router.get("/list", [userController.list]);
router.get("/all", [userController.findAll]);

export default router;
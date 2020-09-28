import {Router} from "express";
import UserController from "@controllers/user.controller";


const router = Router();
const userController = new UserController();

router.get("/", [userController.list]);
router.get("/all", [userController.findAll]);


router.post("/", [userController.insert]);
router.get("/:userId", [userController.findById]);
router.patch("/:userId", [userController.patchById]);
router.delete("/:userId", [userController.remove]);

export default router;
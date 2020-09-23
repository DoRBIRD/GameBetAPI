import {Router} from "express";
import GameAccountController from "@controllers/gameAccount.controller";

const router = Router();
const gameAccountController = new GameAccountController();


router.post("/add/:gameAccountId", [gameAccountController.insert]);
router.get("/show/:gameAccountId", [gameAccountController.findById]);
router.patch("/update/:gameAccountId", [gameAccountController.patchById]);
router.delete("/remove/:gameAccountId", [gameAccountController.remove]);

router.get("/all", [gameAccountController.findAll]);
router.get("/user/:userId", [gameAccountController.findByUserId]);

export default router;
import {Router} from "express";
import GameAccountController from "@controllers/gameAccount.controller";

const router = Router();
const gameAccountController = new GameAccountController();

router.get("/", [gameAccountController.findAll]);

router.post("/:gameAccountId", [gameAccountController.insert]);
router.get("/:gameAccountId", [gameAccountController.findById]);
router.patch("/:gameAccountId", [gameAccountController.patchById]);
router.delete("/:gameAccountId", [gameAccountController.remove]);

router.get("/user/:userId", [gameAccountController.findByUserId]);

export default router;
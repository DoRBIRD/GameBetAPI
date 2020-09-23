import {Router} from "express";
import GameAccountTypeController from "@controllers/gameAccountType.controller";


const router = Router();
const gameAccountTypeController = new GameAccountTypeController();


router.post("/add/:gameAccountTypeId", [gameAccountTypeController.insert]);
router.get("/show/:gameAccountTypeId", [gameAccountTypeController.findById]);
router.patch("/update/:gameAccountTypeId", [gameAccountTypeController.patchById]);
router.delete("/remove/:gameAccountTypeId", [gameAccountTypeController.remove]);

router.get("/list", [gameAccountTypeController.list]);
router.get("/all", [gameAccountTypeController.findAll]);

export default router;
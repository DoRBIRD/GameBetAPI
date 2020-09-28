import {Router} from "express";
import GameAccountTypeController from "@controllers/gameAccountType.controller";


const router = Router();
const gameAccountTypeController = new GameAccountTypeController();

router.get("/", [gameAccountTypeController.list]);
router.get("/all", [gameAccountTypeController.findAll]);

router.post("/:gameAccountTypeId", [gameAccountTypeController.insert]);
router.get("/:gameAccountTypeId", [gameAccountTypeController.findById]);
router.patch("/:gameAccountTypeId", [gameAccountTypeController.patchById]);
router.delete("/:gameAccountTypeId", [gameAccountTypeController.remove]);


export default router;
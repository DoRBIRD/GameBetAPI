import {Router} from "express";
import BetController from "@controllers/bet.controller";

const router = Router();
const betController = new BetController();

router.get("/", [betController.list]);

router.post("/:betId", [betController.insert]);
router.get("/:betId", [betController.findById]);
router.patch("/:betId", [betController.patchById]);
router.delete("/:betId", [betController.remove]);

router.get("/userId/:userId", [betController.findByUserId]);
router.get("/lobbyId/:lobbyId", [betController.findByLobbyId]);

export default router;
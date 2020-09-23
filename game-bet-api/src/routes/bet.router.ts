import {Router} from "express";
import BetController from "@controllers/bet.controller";

const router = Router();
const betController = new BetController();


router.post("/add/:betId", [betController.insert]);
router.get("/show/:betId", [betController.findById]);
router.patch("/update/:betId", [betController.patchById]);
router.delete("/remove/:betId", [betController.remove]);

router.get("/all", [betController.findAll]);
router.get("/userId/:userId", [betController.findByUserId]);
router.get("/lobbyId/:lobbyId", [betController.findByLobbyId]);

export default router;
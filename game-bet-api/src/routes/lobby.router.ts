import {Router} from "express";
import LobbyController from "@controllers/lobby.controller";

const router = Router();
const lobbyController = new LobbyController();


router.post("/add/:lobbyId", [lobbyController.insert]);
router.get("/show/:lobbyId", [lobbyController.findById]);
router.patch("/update/:lobbyId", [lobbyController.patchById]);
router.delete("/remove/:lobbyId", [lobbyController.remove]);

router.get("/all", [lobbyController.findAll]);
router.get("/userId/:userId", [lobbyController.findByUserId]);
router.get("/gameId/:gameId", [lobbyController.findByGameId]);

export default router;
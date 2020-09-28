import {Router} from "express";
import LobbyController from "@controllers/lobby.controller";

const router = Router();
const lobbyController = new LobbyController();

router.get("/", [lobbyController.findAll]);

router.post("/:lobbyId", [lobbyController.insert]);
router.get("/:lobbyId", [lobbyController.findById]);
router.patch("/:lobbyId", [lobbyController.patchById]);
router.delete("/:lobbyId", [lobbyController.remove]);

router.get("/userId/:userId", [lobbyController.findByUserId]);
router.get("/gameId/:gameId", [lobbyController.findByGameId]);

export default router;
import {Router} from "express";
import GameController from "@controllers/game.controller";


const router = Router();
const gameController = new GameController();

router.get("/", [gameController.list]);

router.post("/:gameId", [gameController.insert]);
router.get("/:gameId", [gameController.findById]);
router.patch("/:gameId", [gameController.patchById]);
router.delete("/:gameId", [gameController.remove]);

router.get("/all", [gameController.findAll]);
router.get("/genre/:genre", [gameController.findByGenre]);

export default router;
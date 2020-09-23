import {Router} from "express";
import GameController from "@controllers/game.controller";


const router = Router();
const gameController = new GameController();


router.post("/add/:gameId", [gameController.insert]);
router.get("/show/:gameId", [gameController.findById]);
router.patch("/update/:gameId", [gameController.patchById]);
router.delete("/remove/:gameId", [gameController.remove]);

router.get("/list", [gameController.list]);
router.get("/all", [gameController.findAll]);
router.get("/genre/:genre", [gameController.findByGenre]);

export default router;
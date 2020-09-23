import {Router} from "express";
import ScreenshotController from "@controllers/screenshot.controller";


const router = Router();
const screenshotController = new ScreenshotController();


router.post("/add/:screenshotId", [screenshotController.insert]);
router.get("/show/:screenshotId", [screenshotController.findById]);
router.patch("/update/:screenshotId", [screenshotController.patchById]);
router.delete("/remove/:screenshotId", [screenshotController.remove]);

router.get("/list", [screenshotController.list]);
router.get("/all", [screenshotController.findAll]);
router.get("/userId/:userId", [screenshotController.findByUserId]);
router.get("/lobbyId/:lobbyId", [screenshotController.findByLobbyId]);

export default router;
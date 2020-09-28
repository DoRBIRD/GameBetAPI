import {Router} from "express";
import ScreenshotController from "@controllers/screenshot.controller";


const router = Router();
const screenshotController = new ScreenshotController();

router.get("/", [screenshotController.list]);
router.get("/all", [screenshotController.findAll]);

router.post("/:screenshotId", [screenshotController.insert]);
router.get("/:screenshotId", [screenshotController.findById]);
router.patch("/:screenshotId", [screenshotController.patchById]);
router.delete("/:screenshotId", [screenshotController.remove]);

router.get("/userId/:userId", [screenshotController.findByUserId]);
router.get("/lobbyId/:lobbyId", [screenshotController.findByLobbyId]);

export default router;
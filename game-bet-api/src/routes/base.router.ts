import {Router} from "express";
import UserRouter from "./user.router"
import GameAccountTypeRouter from "./gameAccountType.router"
import GameAccountRouter from "./gameAccount.router"
import GameRouter from "./game.router"
import LobbyRouter from "./lobby.router"
import BetRouter from "./bet.router"
import ScreenshotRouter from "./screenshot.router"

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", UserRouter);
router.use("/gameAccountTypes", GameAccountTypeRouter);
router.use("/gameAccounts", GameAccountRouter);
router.use("/games", GameRouter);
router.use("/lobbies", LobbyRouter);
router.use("/bets", BetRouter);
router.use("/screenshots", ScreenshotRouter);

// Export the base-router
export default router;

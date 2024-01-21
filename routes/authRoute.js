import express from "express";
import { registerController, loginController, testController } from "../controller/authCOntroller.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { sellController } from "../controller/sellController.js";
const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController)

router.post('/sellingpage', sellController)

router.get('/test', requireSignIn, isAdmin, testController);

export default router;
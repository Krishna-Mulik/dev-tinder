import { Router } from "express";
import { signup } from "../controllers/user.controller";
import upload from "../middlewares/multer";

const router = Router();

router.post('/signup', signup)

// router.post('/login',)

export default router;


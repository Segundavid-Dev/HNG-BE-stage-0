import { Router } from "express";
import { getProfile } from "../controller/profileController.mjs";

// create router instance
const router = Router();

router.get("/me", getProfile);

export default router;

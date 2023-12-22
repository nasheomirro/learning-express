import express from "express";
import { get404 } from "../controllers/error.js";

const router = express.Router();

router.use("/", get404);

export const errorHandler = router;

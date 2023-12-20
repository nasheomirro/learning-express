import path from "path";
import express from "express";
import { rootDir } from "../utils/path.js";

const router = express.Router();
const filePath = path.join(rootDir, "views", "404.html");

router.use("/", (req, res) => {
  res.sendFile(filePath);
});

const errorHandler = router;
export default errorHandler;

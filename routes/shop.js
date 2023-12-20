import path from "path";
import express from "express";
import { rootDir } from "../utils/path.js";

const router = express.Router();
const filePath = path.join(rootDir, "views", "shop.html");

router.get("/", (req, res) => {
  res.sendFile(filePath);
});

const shopRoutes = router;
export default shopRoutes;

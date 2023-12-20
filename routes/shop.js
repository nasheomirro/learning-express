import path from "path";
import express from "express";
import { rootDir } from "../utils/path.js";
import { products } from "./admin.js";

const router = express.Router();
const filePath = path.join(rootDir, "views", "shop.html");

router.get("/", (req, res) => {
  console.log("shop: ", products)
  res.sendFile(filePath);
});

const shopRoutes = router;
export default shopRoutes;

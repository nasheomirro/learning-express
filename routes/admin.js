import path from "path";
import express from "express";
import { rootDir } from "../utils/path.js";

const router = express.Router();
const filePath = path.join(rootDir, "views", "add-product.html");

router.get("/add-product", (req, res) => {
  res.sendFile(filePath);
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

const adminRoutes = router;
export default adminRoutes;

import path from "path";
import express from "express";
import { rootDir } from "../utils/path.js";

const router = express.Router();
const filePath = path.join(rootDir, "views", "add-product.html");

// makeshift database
export const products = [];

router.get("/add-product", (req, res) => {
  res.sendFile(filePath);
});

router.post("/add-product", (req, res) => {
  console.log("new product", req.body);
  products.push({ title: req.body.title });

  res.redirect("/");
});

export const adminRoutes = router;
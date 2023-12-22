import express from "express";
import { postAddProduct, getAddProduct } from "../controllers/products.js";

const router = express.Router();

router.get("/add-product", getAddProduct);
router.post("/add-product", postAddProduct);

export const adminRoutes = router;

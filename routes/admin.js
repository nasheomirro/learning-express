import express from "express";
import { addProduct, getAddProduct } from "../controllers/products.js";

const router = express.Router();

router.get("/add-product", getAddProduct);
router.post("/add-product", addProduct);

export const adminRoutes = router;

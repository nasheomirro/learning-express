import express from "express";
import { products } from "./admin.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", {
    products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

const shopRoutes = router;
export default shopRoutes;

import express from "express";
import { products } from "./admin.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", { products, pageTitle: "Shop", path: "/" });
});

const shopRoutes = router;
export default shopRoutes;

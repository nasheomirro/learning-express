import express from "express";
import { products } from "./admin.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", { products });
});

const shopRoutes = router;
export default shopRoutes;

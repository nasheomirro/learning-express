import path from "path";
import express from "express";

const router = express.Router();

const moduleURL = new URL(import.meta.url);
const filePath = path.join(
  path.dirname(moduleURL.pathname),
  "../",
  "views",
  "add-product.html"
);

router.get("/add-product", (req, res) => {
  console.log(filePath);
  res.sendFile(filePath);
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

const adminRoutes = router;
export default adminRoutes;

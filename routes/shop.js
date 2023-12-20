import path from "path";
import express from "express";

const router = express.Router();

const moduleURL = new URL(import.meta.url);
const filePath = path.join(
  path.dirname(moduleURL.pathname),
  "../",
  "views",
  "shop.html"
);

router.get("/", (req, res) => {
  res.sendFile(filePath);
});

const shopRoutes = router;
export default shopRoutes;

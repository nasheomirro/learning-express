import path from "path";
import express from "express";

const router = express.Router();

const moduleURL = new URL(import.meta.url);
const filePath = path.join(
  path.dirname(moduleURL.pathname),
  "../",
  "views",
  "404.html"
);

router.use("/", (req, res) => {
  res.status(404).sendFile(filePath);
});

const errorHandler = router;
export default errorHandler;

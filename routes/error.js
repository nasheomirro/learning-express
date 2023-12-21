import express from "express";

const router = express.Router();

router.use("/", (req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

const errorHandler = router;
export default errorHandler;

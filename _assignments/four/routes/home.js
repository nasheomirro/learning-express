import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

const homeRoutes = router;
export default homeRoutes;
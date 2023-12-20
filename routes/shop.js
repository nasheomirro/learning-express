import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});

const shopRoutes = router;
export default shopRoutes;
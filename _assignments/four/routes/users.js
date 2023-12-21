import express from "express";

const router = express.Router();

const users = [];

router.get("/users", (req, res) => {
  res.render("users", { users });
});

router.post("/add-user", (req, res) => {
  const username = req.body.username;
  users.push({ name: username });
  res.redirect("/");
})

const userRoutes = router;
export default userRoutes;
import express from "express";

const router = express.Router();

// makeshift database
export const products = [];

router.get("/add-product", (req, res) => {
  res.render("add-product");
});

router.post("/add-product", (req, res) => {
  console.log("new product", req.body);
  products.push({ title: req.body.title });

  res.redirect("/");
});

export const adminRoutes = router;

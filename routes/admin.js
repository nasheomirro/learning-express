import express from "express";

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input name="ass"><button>submit</button></form>'
  );
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

const adminRoutes = router;
export default adminRoutes;

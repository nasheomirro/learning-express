// makeshift database
const products = [];

export function getAddProduct(req, res) {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
}

export function addProduct(req, res) {
  console.log("new product", req.body);
  products.push({ title: req.body.title });

  res.redirect("/");
}

export function getProducts(req, res) {
  res.render("shop", {
    products,
    pageTitle: "Shop",
    path: "/",
  });
}

import Product from "../models/product.js";

export function getAddProduct(req, res) {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
}

export async function postAddProduct(req, res) {
  const product = new Product(req.body.title);
  await product.save();

  res.redirect("/");
}

export async function getProducts(req, res) {
  const products = await Product.fetchAll();
  res.render("shop", {
    products,
    pageTitle: "Shop",
    path: "/",
  });
}

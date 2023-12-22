import Product from "../models/product.js";

const adminController = {
  getAddProduct,
  postAddProduct,
  getProducts
};

export default adminController;

function getAddProduct(req, res) {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
}

async function postAddProduct(req, res) {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product({
    title,
    imageUrl,
    description,
    price,
  });

  await product.save();
  res.redirect("/");
}

async function getProducts(req, res) {
  const products = await Product.fetchAll();
  res.render("admin/products", {
    prods: products,
    pageTitle: "Admin Products",
    path: "/admin/products",
  });
}

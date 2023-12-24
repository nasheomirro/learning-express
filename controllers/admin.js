import Product from "../models/product.js";

export default {
  getAddProduct,
  postAddProduct,
  postEditProduct,
  getProducts,
  postDeleteProduct,
  getEditProduct,
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function getAddProduct(req, res) {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function getEditProduct(req, res) {
  // yes, this is kinda useless since we already are in the route
  // but its for demonstration purposes
  const isEditMode = req.query.edit;
  if (!isEditMode) {
    return res.redirect("/");
  }

  const product = await Product.findById(req.params.productId);

  if (!product) {
    return res.redirect("/");
  }

  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
    editing: isEditMode,
    product,
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function postEditProduct(req, res) {
  const id = req.body.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  await Product.saveProduct(title, imageUrl, price, description, id);

  res.redirect("/admin/products");
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function postDeleteProduct(req, res) {
  const id = req.body.id;
  if (id) {
    await Product.deleteProduct(id);
  }
  res.redirect('/admin/products');
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function postAddProduct(req, res) {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  Product.saveProduct(title, imageUrl, description, price);

  res.redirect("/admin/products");
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function getProducts(req, res) {
  const products = await Product.fetchAll();
  res.render("admin/products", {
    prods: products,
    pageTitle: "Admin Products",
    path: "/admin/products",
  });
}

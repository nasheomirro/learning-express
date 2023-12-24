import Cart from "../models/cart.js";
import Product from "../models/product.js";

export default {
  getProducts,
  getProduct,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  postCart,
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function getProducts(req, res) {
  const products = await Product.fetchAll();

  res.render("shop/product-list", {
    prods: products,
    pageTitle: "All Products",
    path: "/products",
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function getProduct(req, res) {
  const product = await Product.findById(req.params.productId);

  res.render("shop/product-detail", {
    pageTitle: product.title,
    product,
    path: "/products",
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function getIndex(req, res) {
  const products = await Product.fetchAll();

  res.render("shop/index", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function getCart(req, res) {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function postCart(req, res) {
  const prodId = req.body.productId;
  const product = await Product.findById(prodId);
  console.log("cart posted", prodId);
  await Cart.addProduct(prodId, product.price);
  res.redirect("/cart");
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function getOrders(req, res) {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function getCheckout(req, res) {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
}

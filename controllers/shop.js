import Cart from "../models/cart.js";
import Product from "../models/product.js";

const shopController = {
  getProducts,
  getProduct,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  postCart,
};

export default shopController;

async function getProducts(req, res) {
  const products = await Product.fetchAll();

  res.render("shop/product-list", {
    prods: products,
    pageTitle: "All Products",
    path: "/products",
  });
}

async function getProduct(req, res) {
  const product = await Product.findById(req.params.productId);
  res.render("shop/product-detail", {
    pageTitle: product.title,
    product,
    path: "/products",
  });
}

async function getIndex(req, res) {
  const products = await Product.fetchAll();

  res.render("shop/index", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
}

async function getCart(req, res) {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
}

async function postCart(req, res) {
  const prodId = req.body.productId;
  const product = await Product.findById(prodId);
  console.log("cart posted", prodId)
  await Cart.addProduct(prodId, product.price);
  res.redirect("/cart");
}

async function getOrders(req, res) {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
}

async function getCheckout(req, res) {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
}

import Product from "../models/product.js";

const shopController = {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders
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

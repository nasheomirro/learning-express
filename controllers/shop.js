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
  deleteCartItem,
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function getProducts(req, res) {
  const products = await Product.getAll();

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
  const products = await Product.getAll();

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
  let [cart, products] = await Promise.all([Cart.getCart(), Product.getAll()]);

  const cartProducts = products.reduce((newProducts, product) => {
    const cartProductData = cart.products.find(
      (_product) => _product.id === product.id
    );
    if (cartProductData) {
      newProducts.push({ productData: product, qty: cartProductData.qty });
    }
    return newProducts;
  }, []);

  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
    products: cartProducts,
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
async function deleteCartItem(req, res) {
  const prodId = req.body.productId;
  const product = await Product.findById(prodId);
  await Cart.deleteProduct(prodId, product.price);
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

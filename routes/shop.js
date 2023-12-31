import express from "express";
import shopController from "../controllers/shop.js";

const router = express.Router();

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.post("/cart-delete-item", shopController.deleteCartItem);

router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

export const shopRoutes = router;

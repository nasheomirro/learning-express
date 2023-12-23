import fs from "fs/promises";
import path from "path";

import { rootDir } from "../utils/path.js";

const filePath = path.join(rootDir, "data", "cart.json");

export default class Cart {
  static async getPreviousCart() {
    try {
      const data = await fs.readFile(filePath, { encoding: "utf-8" });
      return JSON.parse(data);
    } catch (err) {
      return { products: [], totalPrice: 0 };
    }
  }

  static async addProduct(id, productPrice) {
    const cart = await this.getPreviousCart();
    const productExists = cart.products.find((product) => product.id === id);
    if (productExists) {
      cart.products = cart.products.map((product) =>
        product.id === id ? { ...product, qty: product.qty + 1 } : product
      );
    } else {
      cart.products.push({ id, qty: 1 });
    }

    const price = productPrice || 0;
    cart.totalPrice += typeof price === "number" ? price : parseFloat(price);

    await fs.writeFile(filePath, JSON.stringify(cart));
  }
}

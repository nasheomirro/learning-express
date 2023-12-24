import fs from "fs/promises";
import path from "path";

import { rootDir } from "../utils/path.js";

const filePath = path.join(rootDir, "data", "products.json");

async function getProductsFromFile() {
  try {
    const data = await fs.readFile(filePath, { encoding: "utf-8" });
    return JSON.parse(data) || [];
  } catch {
    return [];
  }
}

async function saveProductsToFile(products) {
  return fs.writeFile(filePath, JSON.stringify(products));
}

export default class Product {
  static async fetchAll() {
    return getProductsFromFile();
  }

  static async findById(id) {
    const products = await getProductsFromFile();
    return products.find((product) => product.id === id);
  }

  static async saveProduct(
    title,
    imageUrl,
    description,
    price,
    id = undefined
  ) {
    let products = await getProductsFromFile();

    let newProduct = {
      title,
      imageUrl,
      description,
      price,
      id: id || Math.random().toString(),
    };

    if (!id) {
      products.push(newProduct);
    } else {
      products = products.map((product) =>
        product.id === newProduct.id ? newProduct : product
      );
    }

    await saveProductsToFile(products);
  }

  static async deleteProduct(id) {
    let products = await getProductsFromFile();
    products = products.filter((product) => product.id !== id);
    await saveProductsToFile(products);
  }
}

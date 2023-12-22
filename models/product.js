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

export default class Product {
  constructor({ title, imageUrl, description, price }) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async save() {
    let products = await getProductsFromFile();
    products.push(this);
    fs.writeFile(filePath, JSON.stringify(products));
  }

  static async fetchAll() {
    return getProductsFromFile();
  }
}

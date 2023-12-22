import fs from "fs/promises";
import path from "path";
import { rootDir } from "../utils/path.js";

const filePath = path.join(rootDir, "data", "products.json");

export default class Product {
  
  constructor(title) {
    this.title = title;
  }

  async save() {
    let products = [];
    try {
      const data = await fs.readFile(filePath, { encoding: "utf-8" });
      if (data) {
        products = JSON.parse(data);
      }
    } catch {}
    
    products.push(this);
    fs.writeFile(filePath, JSON.stringify(products));
  }

  static async fetchAll() {
    try {
      const data = await fs.readFile(filePath, { encoding: "utf-8" });
      return JSON.parse(data) || [];
    } catch {}
    return [];
  }
}

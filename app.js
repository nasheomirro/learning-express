import path from "path";
import express from "express";

import errorController from "./controllers/error.js";
import { shopRoutes } from "./routes/shop.js";
import { adminRoutes } from "./routes/admin.js";
import { rootDir } from "./utils/path.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000);

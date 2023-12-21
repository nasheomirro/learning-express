import path from "path";
import express from "express";

import shopRoutes from "./routes/shop.js";
import errorHandler from "./routes/error.js";
import { adminRoutes } from "./routes/admin.js";
import { rootDir } from "./utils/path.js";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(rootDir, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorHandler);

app.listen(3000);

import path from "path";
import express from "express";

import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import errorHandler from "./routes/error.js";
import { rootDir } from "./utils/path.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorHandler);

app.listen(3000);

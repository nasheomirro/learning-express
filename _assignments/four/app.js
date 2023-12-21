import express from "express";
import homeRoutes from "./routes/home.js";
import userRoutes from "./routes/users.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(homeRoutes);
app.use(userRoutes);

app.listen(3001);

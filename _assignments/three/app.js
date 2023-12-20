import path from "path";
import express from "express";

const rootDir = path.dirname(new URL(import.meta.url).pathname);

const app = express();

app.use(express.static(path.join(rootDir, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

app.get("/users", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

app.listen(3001);

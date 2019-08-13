const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, "build")));

app.get("/status", function(req, res) {
  return res.status(200).send("server running");
});

router.route("/recipes").get(function(req, res) {
  const recipes = ["recipe1", "recipe2", "recipe3"];
  res.json(recipes);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/api", router);

app.listen(process.env.PORT || 8080);

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "release")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "release", "index.html"));
});

app.get("*", function (req, res) {
  res.redirect("/");
});

const PORT = 80;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const path = require("path");
const { emailMiddleware } = require("./middlewares/emailMiddleware");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use("/", emailMiddleware);
app.use(express.static(path.join(__dirname, "release")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "release", "index.html"));
});

app.get("*", function (req, res) {
  res.redirect("/");
});

const PORT = 80;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

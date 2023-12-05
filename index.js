// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./routes/transferMoney");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;
console.log(path.join(__dirname, "client", "dist", "index.html"));
app.use(
  "/static",
  express.static(path.join(__dirname, "client", "dist", "index.html"))
);
app.use(bodyParser.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("this is an api for money transfer");
});
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

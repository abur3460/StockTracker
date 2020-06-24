const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./StockReactApp/build/index.html"));
});

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Server up and running on port ${port}`));

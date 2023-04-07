const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/user");
const getQuote = require("./db/getquote");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body);
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No user found" });
    }
  } else {
    res.send({ result: "No User Found" });
  }
});

app.post("/getquote", async (req, res) => {
  let quote = new getQuote(req.body);
  let result = await quote.save();
  res.send(result);
});

app.get("/", (req, res) => {
  res.send("welcome to bimafinserv.com");
});

// app.listen(5000);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});

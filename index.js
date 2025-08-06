const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  return res.json("kkkkk");
});

app.listen(9000, () => {
  console.log("Server is running");
});

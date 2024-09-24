const express = require("express");
const data = require("./data/data.js");
const chats = require("./data/data.js");
const dotenv = require("dotenv");
dotenv.config();


const app = express();


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/chat", (req, res) => {
  res.send(data);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});




const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const express = require("express");
const data = require("./data/data.js");
const chats = require("./data/data.js");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
dotenv.config();

const app = express();

connectDB();

app.use(express.json());  //!to  accept json data

app.get('/'  , (req,res)=>{
  res.send("API is running");
})


app.use('/api/user' , userRoutes)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


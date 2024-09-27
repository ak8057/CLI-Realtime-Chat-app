const mongoose = require("mongoose");
// const { MongoClient, ServerApiVersion } = require("mongodb");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // console.log(`Error: ${error.message}`);
    // process.exit();
    console.log(`Error: ${error.message}`);
    process.exit(); // Use exit code 1 for error status
  }
};


module.exports= connectDB

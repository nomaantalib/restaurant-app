const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectdb = async () => {
  try {
    // Add connection options for better stability
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Connected to database: ${conn.connection.host}`);
    console.log(`Database name: ${conn.connection.name}`);
  } catch (err) {
    console.log("Database error ho gya bhaiyyaa...", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectdb;

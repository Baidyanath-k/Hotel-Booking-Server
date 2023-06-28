const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = require("./app");

// mongoose database connection
mongoose.connect(process.env.mongoDB).then(() => {
  console.log("Hotel Booking MongoDB Database connection is successfully");
});

app.listen(PORT, () => {
  console.log(`Booking hotel is running port ${PORT}`);
});

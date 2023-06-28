const express = require("express");
const cors = require("cors");
const usersRouter = require("./route/users.route");
const hotelRouter = require("./route/hotels.route");
const authRouter = require("./route/auth.route");
const app = express();
const cookieParser = require("cookie-parser");

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hostel  Route is working");
});



// route middleware
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

module.exports = app;

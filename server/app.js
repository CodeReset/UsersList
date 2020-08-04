const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
// Router
app.use("/api/auth", require("./routes/auth.router"));
app.use("/api/news", require("./routes/news.router"));

const start = async () => {
  try {
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to DB");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();

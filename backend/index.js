const express = require("express");
const { connectionToDb } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.listen(PORT, async (req, res) => {
  try {
    await connectionToDb();
    await cloudinaryConnect();
    console.log(`Server running at port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});

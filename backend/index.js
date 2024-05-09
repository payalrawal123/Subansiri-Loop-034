const express = require("express");
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { connectDB } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        // origin: 'http://localhost:5173', // frontend link
        origin: "*",
        credentials: true
    })
);
app.use(
  fileUpload({
      useTempFiles: true,
      tempFileDir: '/tmp'
  })
)

app.listen(PORT, async (req, res) => {
  try {
    await connectDB();
    await cloudinaryConnect();
    console.log(`Server running at port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});

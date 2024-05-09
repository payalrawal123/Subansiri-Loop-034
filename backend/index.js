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
// routes
const userRoutes = require('./routes/user');
const profileRoutes = require('./routes/profile');
const paymentRoutes = require('./routes/payments');
const courseRoutes = require('./routes/course');


// mount route
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/payment', paymentRoutes);
app.use('/api/v1/course', courseRoutes);

// Default Route
app.get('/', (req, res) => {
  // console.log('Your server is up and running..!');
  res.send(`<div>
  This is Default Route  
  <p>Everything is OK</p>
  </div>`);
})



app.listen(PORT, async (req, res) => {
  try {
    await connectDB();
    await cloudinaryConnect();
    console.log(`Server running at port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});

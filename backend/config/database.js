const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB(){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected succcessfully");
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = {
    connectDB
}
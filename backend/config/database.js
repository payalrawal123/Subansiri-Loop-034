const mongoose = require("mongoose");
require("dotenv").config();

async function connectionToDb(){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected succcessfully");
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = {
    connectionToDb
}
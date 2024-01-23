const mongoose = require("mongoose");
const { DB_NAME } = require("./constaints");

async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log("errro from db connection: ", error);
        throw error;
    }
}

module.exports =   connectDB;
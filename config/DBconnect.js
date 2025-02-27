const mongoose = require("mongoose");
require("dotenv").config();


const DB_connect = async () => {
    
    try {
        const connection = await mongoose.connect(process.env.penis)  //env에서 penis를 찾아라
        console.log("database가 연결됐습니다")
    } catch (err) {
        console.log(err)
    }
    
}

module.exports = DB_connect;
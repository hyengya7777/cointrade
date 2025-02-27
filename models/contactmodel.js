const mongoose = require("mongoose");

const contact_schema = new mongoose.Schema({

    name:{
        required : true,
        type : String
    },
    email:{
        required : true,
        type : String
    },
    phone_number:{
        required : true,
        type : String
    },
    speech:{
        required : false,
        type : String
    }


})
//스키마르 모델로 만들어야함
//mongoose.model(모델의 이름 , 스키마의 이름)
const Contact = mongoose.model("Contact",contact_schema);

module.exports = Contact

const async_handler = require("express-async-handler");
const Contact = require("../models/contactmodel")

const get_all_contents =async_handler(async (req,res) => {

    const all_contents = await Contact.find();
    
    res.render("index", {all_contents:all_contents})
});



const post_contents =async_handler(async (req,res)=>{

    console.log("POST 요청 데이터:", req.body); // 🛠 디버깅용 로그 추가
    let {name,email,phone_number,speech} = req.body; 

            
    if(!name|| !email ||!phone_number||!speech){
        res.send("값이 입력되지 않았습니다");
        return ;
    };
    const individual_contact = await Contact.create({
        name , email,phone_number,speech
    });
    res.redirect("/contacts/success");

});

//여기부턴 id필요
const get_contents = async_handler(async (req,res) => {

    
    const content = await Contact.findById(req.params.id);
    res.render("update" , {content : content});

});

const update_contents = async_handler(async (req,res) => {
    let {name,email,phone_number,speech} = req.body; 
    const content = await Contact.findById(req.params.id);

    if(!content){

        throw new Error("없는 아이디는 업데이트가 안됩니다!");

    }

    content.name = name;
    content.email = email;
    content.phone_number = phone_number;
    content.speech = speech;

    content.save();

    res.redirect("/contacts");

});

const delete_contents = async_handler(async (req,res) => {

    const id = req.params.id
    await Contact.findByIdAndDelete(id);

    res.redirect("/contacts");
});
//try catch 대신 astnchadler 사용

const add_content_form = (req,res) =>{
    res.render("add")
}
const success = (req,res) =>{
    console.log("aaaaaaaa")
    res.render("s")
}


module.exports = {
    get_all_contents,
    post_contents ,
    get_contents ,
    update_contents ,
    delete_contents ,
    add_content_form,
    success,
};
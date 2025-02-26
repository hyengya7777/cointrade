const express = require("express");
const app = express();
const method_override = require("method-override");
const path = require('path'); 

app.set("view engine" , "ejs"); //템플릿 엔진이 무엇이고 어디에 있는가?
app.set('views', path.join(__dirname, 'views'));      

app.use(express.static("./public"));  // 정적인 파일은 퍼블릭에 있다
app.use(method_override("_method"));
const DB_connect = require("./config/DBconnect");

DB_connect();
//post:보내기 put:수정하기 get:얻기 delete:삭제하기
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/contacts",require("./routes/routing"));  //여기서 contacts경로로 받는다고 하면 
                                                   // 라우팅만 익스포트하는 쪽에서 /만 써도됨
                                                   //1개만 바꿔도 전부가 바뀌니 편리함



app.listen(3000 , ()=>{
    console.log("서버가 시작됐습니다");
});

app.use("/" , require("./routes/loginrouting"));

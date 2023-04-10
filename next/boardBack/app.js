// 서버에서 사용하는 파일

// const express = require("express"); 는 같은 코드지만, 옛날 방식이다.
// require 방식은 import 한 대상의 함수를 일부 사용하지 않더라도 모두 불러온다.
// => CommonJS 방식

// import 방식은 대상의 사용할 함수만 하나 혹은 여러개 불러올 수 있다.
// 또한, import 방식은 package.json 으로 가서 type 방식을 따로 설정해줘야 한다!
// => ES module 방식(import, export)
import express from "express";
import morgan from "morgan";
import router from "./routers/boards.js"

// app 에는 우리가 사용할 Express 객체가 들어있다.
// Express 객체 속에는 api 제작에 도움을 주는 여러 함수들이 만들어져 있다!
const app = express();
app.set("port", 3001); // 서버 포트번호 설정하기

// 해당 포트 번호에서 서버를 실행시켜줘(요청을 들어줘)
// listen 함수를 통해, 3001번 포트에서 발생하는 요청은 모두 app.js 로 전달된다!
app.listen(app.get("port"), console.log(`${app.get("port")} 번에서 실행중 입니다.`));

// 미들웨어 : 요청과 응답 사이를 거쳐서 실행되는 함수들
// boards get 요청! -> 미들웨어 -> 게시글 목록 데이터 응답!
// express.js 는 요청과 응답 사이에 미들웨어 추가가 자유롭다!

// morgan 라이브러리 : 대표적인 미들웨어 중 하나
// morgan 라이브러리를 app 의 미들웨어로 추가하기 -> use()
// morgan()
// 'dev' : 개발할 때 (시간, 경로, 요청메소드)
// 'combined' : 배포할 때 (사용자 정보 포함하여)
// 'tiny' 'common' 'short'
app.use(morgan('short'));

// body-parser
// express 4.16.0 버전부터 기본 내장
// 어떠한 데이터를 허용할지 req 로 받은 데이터를 어떠한 방식으로 해석할지를 설정하는 미들웨어
app.use(express.json()); // 데이터 형식으로 json
// 적용 설정값
// ex) extended : true -> {a:'양홍민'}
// ex) extended : false -> [Object: null prototype] {a:'양홍민}
app.use(express.urlencoded({extended:false})); // extended 는 반드시 설정, 보통 false

app.use("/boards", router);

// get 요청받아보기
app.get("/", (req, res)=>{
    res.send("hello world");
})
// app.get("/boards", (req, res)=>{
//     // req 변수에는 프론트에서 사용자가 요청한 요청 정보들이 담겨있는 Request 객체가 담겨있다.
//     //res 변수에는 응답으로 전달할 때 사용할 수 있는 여러가지 함수들이 들어있는 Response 객체가 들어있다.
//     res.send({name:"양홍민", age:38});
// });


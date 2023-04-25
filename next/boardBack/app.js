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
import { getConnection } from "./db.js";
// cors
import cors from "cors";

// app 에는 우리가 사용할 Express 객체가 들어있다.
// Express 객체 속에는 api 제작에 도움을 주는 여러 함수들이 만들어져 있다!
const app = express();
app.set("port", 3001); // 서버 포트번호 설정하기

// 해당 포트 번호에서 서버를 실행시켜줘(요청을 들어줘)
// listen 함수를 통해, 3001번 포트에서 발생하는 요청은 모두 app.js 로 전달된다!
app.listen(app.get("port"), console.log(`${app.get("port")} 번에서 실행중 입니다.`));

app.use(cors());

// 미들웨어 : 요청과 응답 사이를 거쳐서 실행되는 함수들
// boards get 요청! -> 미들웨어 -> 게시글 목록 데이터 응답!
// express.js 는 요청과 응답 사이에 미들웨어 추가가 자유롭다!

// morgan 라이브러리 : 대표적인 미들웨어 중 하나
// morgan 라이브러리를 app 의 미들웨어로 추가하기 -> use()
// morgan()
// 'dev' : 개발할 때 (시간, 경로, 요청메소드)
// 'combined' : 배포할 때 (사용자 정보 포함하여)
// 'tiny' 'common' 'short'
app.use(morgan('dev'));

// body-parser
// express 4.16.0 버전부터 기본 내장
// 어떠한 데이터를 허용할지 req 로 받은 데이터를 어떠한 방식으로 해석할지를 설정하는 미들웨어
app.use(express.json()); // 데이터 형식으로 json
// 적용 설정값
// ex) extended : true -> {a:'양홍민'}
// ex) extended : false -> [Object: null prototype] {a:'양홍민}
app.use(express.urlencoded({extended:false})); // extended 는 반드시 설정, 보통 false

app.use("/boards", router);

// db 연결을 위한 connection pool 만들기


// localhost:3001/test get 요청
// res(응답할때 사용하는 객체)에서 사용할 수 있는 함수
// res.status(상태코드))
// res.send() : 응답으로 문자열을 결과로 줄 때 사용(content-type 을 알아서 판단, 만능)
// res.json() : 응답으로 json형식으로 바꾸어 보내줌(content-type 이 application/JSON 으로 고정)
// res.render() : 응답으로 html 코드 형식을 제공
// res.end() : 응답으로 보낼 데이터가 없을 때 응답 종료
app.get('/test', async (req, res)=>{
    let testResponse = {
        message: '사용자 목록 가져오기 성공!'
    };
    try{
        let connection = await getConnection();
        let [rows, field] = await connection.query('select * from tbl_users');
        connection.release();
        testResponse.data = rows;
        res.status(200).json(testResponse);
    } catch(err){
        res.status(500).end(); // 500은 서버 내부적인 오류
    }
});

//동적 쿼리 작성
app.get('/users/:uId', async (req, res)=>{
    console.log('/users/:userId get 요청 발생!');
    let usersRes = {
        message: '유저 정상적으로 받아옴!'
    };
    try{
        let connection = await getConnection();
        let sql = `select * from tbl_users where uId=+${req.params.uId}`;
        let [rows, field] = await connection.query(sql);
        if(rows.length === 0){
            usersRes.message = '유저 조회 실패!';
        }
        usersRes.data = rows;
        res.status(200).json(usersRes);
    } catch(err){
        console.log('서버 자체 오류 발생', err);
        res.status(500).end();
    }
});

// get 요청받아보기
// app.get("/", async (req, res)=>{
//     console.log('get 요청 진행중');
//     let conn = await pool.getConnection(async (err, conn)=>{return conn});
//     let [rows, field] = await conn.query('select * from tbl_posts');
//     console.log('get요청 종료');
//     res.send(rows);
// })

// app.get("/boards", (req, res)=>{
//     // req 변수에는 프론트에서 사용자가 요청한 요청 정보들이 담겨있는 Request 객체가 담겨있다.
//     //res 변수에는 응답으로 전달할 때 사용할 수 있는 여러가지 함수들이 들어있는 Response 객체가 들어있다.
//     res.send({name:"양홍민", age:38});
// });

app.get('/tmp/users', async (req, res)=>{
    try{
        let sql = 'select * from tbl_users where uName=? or uName=?;';
        let conn = await getConnection();
        let [rows, field] = await conn.query(sql, [req.query.u1, req.query.u2]);
        conn.release();
        res.status(200).json(rows);

    }catch(err){
        console.log(err);
        res.status(500).end();
    }

});

// 다중쿼리 테스트
app.get('/tmp/:uId', async (req, res)=>{
    try{
        let sql = 'select * from tbl_users where uId = ?;';
        let conn = await getConnection();
        let [rows, field] = await conn.query(sql, req.params.uId);
        conn.release();
        res.status(200).json(rows);

    }catch(err){
        console.log(err);
        res.status(500).end();
    }

});


app.post('/tmp/users', async (req, res)=>{
    try{
        let insertValue = [
            '신순재',
            'shinsoonjae',
            'soonjae0@gmail.com',
            '010-5555-5555',
            'https://www.daum.com',
            null,
            '원주시',
            '문막읍',
            '문막로 145', 
            '08832', 
            '20230417', 
            '20230417'
        ];
        let sql = `
        insert into tbl_users 
        (uName, userName, uEmail, uPhone, uWebsite, uProvince, uCity, uDistrict, uStreet, uZipcode, createdAt, updatedAt)
        values 
        (?);
        `;
        let conn = await getConnection();
        let [rows, field] = await conn.query(sql, [insertValue]);
        conn.release();

        res.status(201).json(rows);

    }catch(err){
        console.log(err);
        res.status(500).end();
    }
});

// insert 같은 경우에는 여러개의 인자를 객체로 전달
app.post('/tmp/boards', async (req, res)=>{
    try{
        // let insertValue = [req.body.pTitle, req.body.pContent, req.body.userId];
        let sql = `
        insert into tbl_posts
        set ?;
        `;
        let conn = await getConnection();
        let [rows, field] = await conn.query(sql, req.body);
        conn.release();
        res.status(201).json(rows);
    }catch(err){
        console.log(err);
        res.status(500).end();
    }
});


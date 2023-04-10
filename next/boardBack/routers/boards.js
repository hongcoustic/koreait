// 주소가 localhost:3001/boards 로 시작하는 애들은 여기서 api 관리
import express from "express";

const router = express.Router(); // 라우터 관리

router.get('/', (req, res)=>{
    res.send(`${req.query.userId}, ${req.query.sid01} boards.js 안의 / 경로`);
});

router.get('/new', (req, res)=>{
    res.send('/new 응답!');
})

router.get('/:boardNum', (req, res)=>{
    // router parameter로 전달한 값은 req 객체 속 params 객체 속 변수명에 들어있다
    res.send(`${req.params.boardNum} 번 게시글 요청에 대한 응답! /boardNum 응답!`);
});

// /boards?userId=10
// ? 는 주소가 아니기에 ? 앞까지의 주소 에 가서 req.query.변수명 으로 값을 받아와야한다!
// router.get('/?userId=10', (req, res)=>{
//     res.send(`요청완료!!`);
// });




export default router;
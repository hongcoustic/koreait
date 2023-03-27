// console.log('첫번째 작업');

// // setTimeout 함수는 첫번째 인자로 실행시킬 함수를 넘겨준다.
// // 두번째 인자로는 지연시킬 ms 를 넘겨준다.
// // (선택) 그 뒤의 인자는 실행시킬 함수의 인자로 넘어가는 값들을 넣어준다.
// setTimeout(console.log, 1000, '안녕');
// //setTime(()=>{console.log('안녕')}, 1000) 과 같다.

// console.log('작업 완료');


// //1. 콜백 함수(인자로 함수를 넘겨준다)를 이용한다.
// const f1 = (a) => {
//     setTimeout(()=>{
//         console.log('데이터 받아오기 완료');
//         a();
//     }, 1000);
// }

// const f2 =() => {
//     console.log('받아온 데이터를 출력 했습니다.');
// }

// f1(f2);

// 콜백 지옥
// 동기함수 1이 완전히 끝난 후 동기함수 2 완전히 끝난 후 동기함수 3 완전히 끝난 후...
// 마지막으로 작업을 해야하는 task 가 있을 때 함수를 인자로 넘겨주는 방식은 너무나도 복잡해진다.

// // 2. Promise 객체
// let a = new Promise((resolver, reject)=>{
//     setTimeout(()=>{resolver(100)}, 5000);
// });
// console.log(a);
// a.then((resolver)=>{console.log(resolver)});

// console.log('양홍민');

// // fetch 함수는 인자로 API(경로)를 작성한다.
// // 그리고 기본적으로는 GET 방식으로 해석한다.
// let a = fetch("http://koreanjson.com/users");
// console.log(a);

// a.then((param)=>{return param.json()}).then((param)=>{
//     console.log(param)

//     for(let i = 0 ; i < param.length ; i++){
//         console.log(param[i].name);
//     }


// });


// // GET 방식을 통해 3번 아이디를 가진 user 의 정보 출력하기
// fetch("https://www.koreanjson.com/usersj/3")
// .then((resp)=>{return resp.json()})
// .then((user)=>{console.log(user)})
// .catch((err)=>{console.log(err)});

// 가상 유저

let newUser = {
    "id": 11,
    "name": "양홍민",
    "username": "kanginlee",
    "email": "kanginlee@hanmail.net",
    "phone": "010-9311-9411",
    "website": "https://twitter.com/@kanginlee",
    "province": "전라북도",
    "city": "전주시",
    "district": "완산구",
    "street": "풍남동3가 64-1",
    "zipcode": "55041",
    "createdAt": "2019-02-24T16:17:47.000Z",
    "updatedAt": "2019-02-24T16:17:47.000Z"
}

fetch('https://koreanjson.com/users/', {
    method : 'POST',
    body : JSON.stringify(newUser),
    header: {
        'Content-Type' : 'application/json'
    }
}).then(resp=>resp.json()).then(newUser=>{
    console.log('우리가 추가한 user :' ,newUser);
});
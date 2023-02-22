// 구조화된 데이터 비구조화 하기
// 1. 객체
const myBook = {
    title : '꼬미의 대모험',
    page : 205,
    price : 10000,
    color : 'blue'
};

// 객체 속에 들어있는 여러개의 값은 객체 속 key 값과 동일한 이름의 변수에다가 한번에 대입할 수 있다.
// 그리고 변수는 중괄호로 묶어줘야 한다.
const {title, page, price} = myBook;

show(myBook);

function show({title, page, price}){
    console.log(`책 제목은 ${title} 입니다.`);
    console.log(`페이지 수는 ${page} 입니다.`);
    console.log(`가격은 ${price} 입니다.`);
}

// 2. 배열
// 배열을 비구조화하여 변수에 한번에 대입하기
const names = ['홍길동', '김철수', '박영희'];

// 배열은 변수들을 []로 묶어서 한번에 대입할 수 있으며
// 객체의 비구조화와 다르게, 대입되는 순서가 제한된다.
const [a, b, c] = names;
console.log(a);
console.log(b);
console.log(c);

const personInfo = ['홍길동', 10, 30.8];
let [v1, v2, v3] = after10(personInfo);
function after10([a, b, c]){
    let res = [a, b+10, c+20];
    return res;

}

console.log(v1);
console.log(v2);
console.log(v3);

console.log('======================day04 논리연산맥락평가===================')
console.log('안녕' && 7);
console.log(' ' && '반가워');



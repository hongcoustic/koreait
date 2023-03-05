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

console.log('======================day05 map()함수를 통해서 반복되는 컴포넌트 한번에 넣어주기===================')
let ar = [1, 3, 5, 7];
console.log(ar);

let res = ar.map((v) => `<li>${v}번째 요소 입니다.</li>`);

ar = [
    {name: '양홍민', age: 10},
    {name: '김예진', age: 20}
]

res = ar.map((v)=>`<li class=${v.name}>${v.age}</li>`);

console.log(res);

console.log('======================day07 얕은 복사와 깊은 복사===================')
// 자주 사용되는 number, string, boolean,... 은 깊은 복사
// 배열, 사용자가 만든 객체들은 얕은 복사가 된다.

// 얕은 복사 : 동일한 객체 자체가 새롭게 만들어지는 것이 아니라, 같은 객체의 위치(주소)만 저장이 된다.
ar1 = [10, 20, 30];
ar2 = ar1;
ar2.push(50);
console.log(ar1);

// 깊은 복사 : 동일한 모양의 객체를 만들어서 대입하는 방식
ar1 = [10, 20, 30];
// ar2 = []

// for(let i = 0; i < ar1.length; i++){
//     ar2.push(ar1[i])
// }
ar2 = ar1.map(value => value);

ar2.push(50);
console.log(ar1);
console.log(ar2);

// spread operate : ... (단항연산자)
// 깊은 복사를 도와주는 연산자
// 연산자 사용 결과는 해당 배열 속에 들어있는 값들
ar1 = [10, 20, 30];
console.log(...ar1);
ar2 = [...ar1, 50];
console.log(ar1);
console.log(ar2);

// concat() 함수
// 기존에 있던 배열에 다른 배열을 붙여서 새로운 배열을 반환한다.
ar1 = [10, 20, 30];
ar2 = ar1.concat(50);

console.log(ar1);
console.log(ar2);

// 배열이 아닌 일반 객체에서 사용
// s1과 s2는 같은 객체를 참조하고 있다.
s1 = {id: 1, name: '양홍민', grade: 'A'};
s2 = s1;

s2.name = '김예진';
console.log(s1);

s1 = {id: 1, name: '양홍민', grade: 'A'};
// s1.map(value => console.log(value)); // 에러, map() 함수는 배열에서만 사용 가능
console.log({...s1});
s2 = {...s1, age: 15};
s2.name = '김예진';
console.log(s1);
console.log(s2);

// 배열 깊은 복사하여 삭제하기
// 반복문을 사용할 경우
ar1 = ['양홍민', '김예진', '홍길동'];
ar2 = [];
for(let a of ar1){
    if(a != '양홍민'){
        ar2.push(a);
    }
}
console.log(ar1);
console.log(ar2);
// 배열 속 특정 조건에 부합하는 요소가 들어있는 새로운 배열을 반환하는 함수
// filter()
ar1 = ['양홍민', '김예진', '홍길동'];
ar2 = ar1.filter(value=>value !== '양홍민');
console.log(ar1);
console.log(ar2);


console.log('ts 파일');

// 함수 에서의 사용
// 타입 추론이 불가능하다.

// function add(){}
// const add= function{}

let add:(a:number, b?:number)=>number;

add = (a:number, b?:number):number => {
    if(b === undefined){ b = 0 };
    return a + b;
}

add(10, 20);
add(100);

// 함수 사용 결과가 값이 아닌 경우는 무슨 타입일까?
// undefined => void 타입이다.
function f1(a:number|string):void{
    console.log('함수 실행');

}

add = function(num1:number):number{
    if(num1 > 10){
        return 10;
    }
    if(num1 < 5){
        return 5;
    }
    return 0;
}

// 타입 미리 선언하기
// interface 키워드 사용
interface MyStudentType {
    name:string;
    age:number;
    isStudent:boolean;
    adress?:string
}

let s1:MyStudentType;
s1 = {
    name: '양홍민',
    age: 10,
    isStudent: true
}

// type 키워드 사용
// 기존 타입을 내가 부르고 싶은대로 부를 때(별칭을 만들고 싶을 때)
type MyType = string;
let var1:MyType;
// var1 = 10; // 오류 발생
var1 = '10';

type MyStudentType2 = {
    name:string;
    age:number;
    isStudent:boolean;
    address?:string;
}
let var2:MyStudentType2;
var2 = {
    name:'김춘삼',
    age:4,
    isStudent:false
}



export{}
const TypescriptPage = () => {
    // 타입 추론?
    // 만일 특정 변수에 들어갈 수 있는 타입이 명시적으로 선언되지 않았으면,
    // 최초로 대입된 값을 기반으로 타입을 추론한다.
    let a = '양홍민'; // 타입 추론에 따라, a 라는 변수에는 String 타입만 들어갈 수 있다.
    // a = 10; // 오류 발생
    console.log(a);

    let b:string = '김춘삼';
    // b = 10; // 오류 발생
    // b = null; // 오류 발생, null 도 null 타입이기 때문
    // b = undefined; // 오류 발생, undefined 도 undefined 타입이기 때문

    let c; // 선언 시 대입되는 값이 없다면 any 타입으로 추론하고, any 는 어떤 타입이든 상관 없다.
    c = '양홍민';
    c= 10;

    let d = null // 최초로 null 또는 undefined 를 대입해도 any 타입으로 추론한다.

    // 두가지 이상의 타입이 대입될 수 있는 변수일 경우?
    // | 연산자를 사용한다.
    let e:string|null = '양홍민';
    e = null;
    // e = 10; // 오류 발생, e 는 string 과 null 타입만 대입 가능
    let myObj:{name:string, age:number|null, school?:string} = {
        name:'양홍민',
        age:10
    }

    // myObj.name = 50;
    // myObj.school = '서이초등학교';
    // myObj = 10; 
    myObj = {
        name:'대모험',
        age:50,
        school:'서이초등학교'
    }

    // 배열
    // 배열을 선언할 때는 배열 속의 요소 타입까지 고려해야 한다.
    // 요소의타입[]
    // ex) number|string[] => number 타입 또는, string 요소 배열 타입만 대입 가능
    // ex) (number|string)[] => number 혹은 string 요소 배열 타입만 대입 가능
    let ar:(number|string)[] = [10, 20, 30];
    ar = ['안녕', 10, 20];

    let ar2:[string, boolean];
    ar2 = ['안녕', true];
    // ar2 = [true, '안녕'];
    // ar2[0].toUpperCase(); // 타입을 선언할 때 알려주었기 때문에 string타입 관련 자동완성 사용이 가능하다.

    


    return(
        <h1>Typescript Page</h1>
    );
}

export default TypescriptPage;
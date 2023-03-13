import { useReducer, useState } from "react";

const reducer = (state, action) => {
    // myReducer 함수가 return 하는 값이 state 변화로 적용된다
    // console.log(b);
    // return 100;
    if(action.type === 'increase'){
        return state + 1;
    }

    if(action.type === 'mul'){
        return state * 2;
    }

    if(action.type === 'division'){
        return state % 3;
    }
    throw new Error('예상하지 못한 에러'); // 앞의 조건문에 해당되지 않을 경우, 오류 발생
}

const ReducerPage = () => {
    // const [cnt, setCnt] = useState(0);

    // const onButton1 = () => {
    //     setCnt(cnt+1);
    // }
    // const onButton2 = () => {
    //     setCnt(cnt*2);
    // }
    // const onButton3 = () => {
    //     setCnt(cnt%3);
    // }

    // useReducer(리듀서함수, state의초기값);
    // -> 사용 결과는 두칸짜리 배열, 0번째 자리는 state변수, 1번째 자리에는 dispatch 함수가 들어있다.
    // 리듀서함수 : 실질적으로 상태 관리 역할을 해주는 함수(ex. setState)
    // dispatch 함수 : 리듀서함수를 실행시켜주는 함수

    const [cnt, dispatch] = useReducer(reducer, 0);

    return(
        <>
        <h1>{cnt}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>버튼1</button>
        <button onClick={()=>dispatch({type:'mul'})}>버튼2</button>
        <button onClick={()=>dispatch({type:'division'})}>버튼3</button>

        </>
    );
}

export default ReducerPage;
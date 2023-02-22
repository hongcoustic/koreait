// import React from "react";
// react 라이브러리에서 기본으로 export 한 대상은 React 이며,
// 그 안에는 수많은 함수들이 들어있다(useState 포함)
// 사용할때는 React.useState() 로 사용 가능

import { useState } from "react";
// useState 함수만 import 하여 쓰고 싶을때에는
// useState 는 기본적으로 export 되어 있지 안히게 {}로 감싸서 import
// cnt 는 상태(렌더링 했을때 변화되는 부분, state) 변수가 되었고,
// setCnt는 함수가 되는데, 변화된 상태를 반영하여 re-rendering 요청하는 함수가 된다.

const CounterNum = () => {
    const [cnt, setCnt] = useState(0);
    // useState() 함수는 인자로 초기값 전달
    // 함수 사용 결과는 두칸 배열, 앞자리는 상태(state), 뒷자리는 state를 수정하는 함수
    const [star, setStar] = useState('★');
    
    function onCountUp(){
        setCnt(cnt => cnt + 3);
        setStar((star) => {
            for(let i = 0; i < cnt; i++){
                star += '★';
            }
            return star;
        });
    }
    
    function onCountDown(){
        setCnt(cnt => cnt - 1);
    }

    function onButtonClick(){
        onCountDown();
        onCountUp();
    }
    
    return(
        <>
            <h1>{cnt}</h1>
            <h1>{star}</h1>
            <button onClick={onCountDown}>-</button>
            <button onClick={onCountUp}>+</button>
            <button onClick={onButtonClick}>이상한버튼</button>
        </>
    );
}

export default CounterNum;
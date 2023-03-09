import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

const ChildChildA = ({title, f})=>{
    useEffect(()=>console.log('ChildChildA렌더링', title), [title, f]);
    return(
        <h4>{title} : {f()}</h4>
    );
}

const ChildA = memo(()=>{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    let variable = 0;
    const ref = useRef(0);

    useEffect(()=>{console.log('childA 렌더링', x, y, z, variable, ref.current)});
    
    const onAbuttonClick = ()=>{
        ref.current = ref.current + 1; // ref.current++;
        variable = variable + 1; // variable++;
        console.log(ref.current, variable);
    }

    const getXY = useMemo(
        ()=>{
            console.log('x * y를 수행합니다');
            return x*y;
        }, 
        [x, y]
    );


    const getYZ = ()=>{
        console.log('y*z를 계산중입니다');
        return y*z;
    }

    const getXZ = useCallback(
        ()=>{
            console.log('xz를 계산중입니다')
            return x*z;
        },
        [x, z]
    );

    return (
        <DivWrap>
            <h2>ChildA</h2>
            <button onClick={onAbuttonClick}>Child A 버튼</button>
            <h3>X : {x} Y:{y} Z:{z}</h3>
            <button onClick={()=>setX(x+1)}>x+</button>            
            <button onClick={()=>setY(y+1)}>y+</button>            
            <button onClick={()=>setZ(z+1)}>z+</button>
            <h4>X*Y : {getXY}</h4>   
            <ChildChildA title={'X*Z'} f={getXZ} />
            <ChildChildA title={'Y*Z'} f={getYZ} />
        </DivWrap>
    );
});

const ParentPage = ()=>{
    const [cnt, setCnt] = useState(0);
    const [inputTxt, setInputTxt] = useState('');


    useEffect(
        ()=>{
            console.log('함수실행됨!', cnt);
            return ()=>{console.log('의존성배열없는 cleaup')};
        }
    );
    useEffect(
        ()=>{
            console.log('비어있는배열 넘어감', cnt);
            return ()=>{console.log('빈 의존성배열 cleanup')};
        } , 
        []
    );
    useEffect(
        ()=>{
            console.log('세번째로 실행시키고자하는 함수')
            return ()=>{console.log('return 옆에정의된 함수입니다!')};
        }, 
        [inputTxt,cnt]
    );



    return (
        <DivWrap>
            <h1>부모페이지 입니다</h1>
            <input onChange={(e)=>{setInputTxt(e.target.value)}}/>
            <p>입력된 값은 : {inputTxt}</p>
            <h2>{cnt}</h2>
            <button onClick={()=>{setCnt(cnt + 1)}}>+</button>
            <button onClick={()=>{setCnt(cnt - 1)}}>-</button>
            <ChildA />
        </DivWrap>
    );
}

export default ParentPage;

const DivWrap = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid black;
`;
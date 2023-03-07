import { red } from "@mui/material/colors";
import { useMemo, useRef, useState } from "react";

const MarketPage = () => {
    const [marketList, setMarketList] = useState(
        [
            {id:1, name:'바나나', cnt:3, clear:true},
            {id:2, name:'사과', cnt:2, clear:false},
            {id:3, name:'자두', cnt:5, clear:true}
        ]
    );

    const inputRef = useRef(null);

    const onComplete = (id) => {
        // 1. 매개변수로 받은 id 에는 marketList 배열이 들어있다.
        // 2. map() 함수를 통해 새로운 배열을 만들겠다.
        // 3. 기존 배열의 v.id 가 매개변수로 받아온 id와 같니? 
        // id가 같은 경우(true) 삼항연산을 통해 
        let tmp = marketList.map((v)=>v.id === id ? {...v, clear:!v.clear} : v)
        setMarketList(tmp);
    }

    const marketListComponents = marketList.map(
        (v)=><p onClick={()=>onComplete(v.id)} key={v.id} style={{color:v.clear && 'red'}}>구매대상 : {v.name}, 갯수 : {v.cnt}</p>

    );

    // 구매 완료(marketList.clear === true) 갯수 체크
    // const getClearCnt = () => {
    //     return marketList.filter((v)=>v.clear).length;
    // }

    // 위 getClearCnt 를 useMemo 를 통해 다시 만들기
    const getClearCnt = useMemo(
        ()=>{
            console.log('구매완료 갯수를 세는 함수 실행!');
            return marketList.filter((v)=>v.clear).length;
        }, [marketList]);
    
    const onAdd = ()=>{
        console.log(inputRef[0].value);
        if(!inputRef[0].value){
            inputRef[0].focus();
            return;
        }
        if(!inputRef[1].value){
            inputRef[1].focus();
            return
        }
       let tmp = [
            ...marketList, 
            {
                id: marketList[marketList.length-1].id + 1,
                name: inputRef[0].value,
                cnt: inputRef[1].value,
                clear: false
            }
        ]
        setMarketList(tmp);
    }

    // 주문자 ID 관리 state
    const[idLength, setIdLength] = useState(0);

    // 주문자 ID 입력 시, 8글자 미만이면 input text가 red
    const onIdChange = (e) => {
        setIdLength(e.target.value.length);
    }


    return (
        <>
        <h2>마켓페이지</h2>
        <input placeholder="물품" ref={(el)=>inputRef[0] = el} />
        <input placeholder="갯수" ref={(el)=>inputRef[1] = el} />
        <input placeholder="주문자 ID를 입력하세요" style={{color: idLength < 8 && 'red'}} onChange={onIdChange} />
        <button onClick={onAdd}>추가하기</button>
        {marketListComponents}
        <h2>전체 항목 갯수 : {marketList.length}</h2>
        <h2>구매 완료 갯수 : {getClearCnt}</h2>
        </>
    )
}

export default MarketPage;
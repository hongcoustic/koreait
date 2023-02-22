import Header from "../component/header";
import styled from "styled-components";
import { useState } from "react";

const OpPage = () => {
    const subtitle = "삼항연산자 및 논리연산자 입니다.!";
    const detail = "리액트나 자바스크립트에서는 삼항연산자 및 논리연산자를 쓰는 경우가 많습니다.";

    const [isClicked, setIsClicked] = useState(0);
    function onDivClick(){
        setIsClicked(1);
        console.log(setIsClicked);
    }
    return(
        <>
            <Header subtitle={subtitle} detail={detail} />
            <MyDiv id='div1' a = '안녕' isCar = 'true'>div1 입니다.</MyDiv>
            <MyDiv id='div2'>div2 입니다.</MyDiv>
            <MyDiv onClick={onDivClick} a = {isClicked}>div3</MyDiv>
        </>
    );
}

const MyDiv = styled.div`
    border: 3px solid black;
    display: inline-block;
    width: 300px;
    height: 100px;
    text-align: center;
    margin: 30px 20px;
    background-color: ${({a}) => a ? 'red' : ''};

    &:after{
        content: ${({isCar}) => isCar && "'🚗'"};
    }
    &:hover{
        background-color: #e9e9e9;
    }

`

export default OpPage;
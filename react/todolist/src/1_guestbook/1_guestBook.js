//방명록 페이지
import { useRef, useState } from "react";
import Header from "../component/header";
import SideBar from "../component/sideBar";
import styled from "styled-components";
import Close from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const GuestBookPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [names, setNames] = useState(['양홍민','김철수','홍길동']);
    const [inputText, setInputText] = useState('');

    const nameInput = useRef(null);
    
    const onCancel = (e)=>{
        console.log('x버튼 클릭');
        let tmp = e.target.value; // names 배열에서 삭제시킬 값
        console.log(tmp);
        let ar = names.filter(value=>value !== tmp);
        setNames(ar);
    }

    const nameList = names.map((value)=> <GuestBookListCard>{value}<IconButton value={value} onClick={onCancel}><Close /></IconButton></GuestBookListCard>);

    // input 태그에 입력된 값이 변화할때마다 실행되는 함수
    const inputChange = (e) => {
        // 매개변수 e 에는 event 관련 객체가 들어있다.
        // 어떤 태그에서 발생한 이벤트인지(x축, y축, 이벤트 종류...)
        // console.log(e);
        // console.log(e.target.value);
        setInputText(e.target.value);
    }

    const buttonClick = () => {
        // input 태그 속 내용이 비어있다면 alret() 함수를 실행하여 필수값 입력 안내하고 함수 종료
        // if(!inputText){
        //     alert('필수 입력 값입니다.');
        //     return nameInput.current.focus();
        // }
        if(!nameInput.current.value){
            alert('필수 입력 값입니다.');
            return nameInput.current.focus();
        }
        let tmp = [...names, inputText];
        setNames(tmp);
        setInputText('');
        // input 태그를 찾아서 focus 시키기
        // let target = document.querySelector('input');
        // console.log(target);
        // target.focus();

        console.log(nameInput.current);
        nameInput.current.focus();
        

    }
    return (
        <>
        <Header 
        subtitle={'온라인 방명록'} 
        detail={'본인의 이름을 작성한 후 추가해보세요!'} 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        />
        <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ContentWrap>
            <h2>방명록</h2>
            <InputDiv>
                <input 
                onChange={inputChange} 
                type='text' 
                placeholder='이름을 입력!'
                ref={nameInput}
                value={inputText}
                 />
                <button type='button' onClick={buttonClick}>추가하기!</button>
            </InputDiv>
            {nameList}
        </ContentWrap>
    
        </>
    );
}

export default GuestBookPage;

const ContentWrap = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 2px 2px 2px rgba(0 0 0 / 20%);

`

// 방명록 입력된 이름 보여주는 카드
const GuestBookListCard = styled.div`
    margin: 20px 10px;
    text-align: center;
    padding: 5px;
    border: 3px solid #e9e9e9;
    box-shadow: 2px 2px 2px rgba(0 0 0 / 20%);

`

const InputDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    column-gap: 5px;
    & > input {
        height: 50px;
        flex-grow: 1;
    }

    & > button {
        background-color: lightblue;
        border-style: none;
        border-radius: 20px;

    }

    & > button:hover {
        transform: scale(1.1);
        transition: 200ms;
        cursor: pointer;
    }


`
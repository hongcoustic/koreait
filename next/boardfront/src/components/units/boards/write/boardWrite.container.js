import { useRef, useState } from "react";
import BoardWriteUI from "./boardWrite.presenter";
import axios from "axios";
import { useRouter } from "next/router";

const BoardWrite = (props)=>{
    // props.isUpdate 가 true 라면 게시글 수정에서 사용중인 BoardWrite
    // props.isUpdate 가 false 라면 게시글 작성에서 사용중인 BoardWrite

    const router = useRouter();

    // titleInput = {current:null}
    // state변수처럼 화면이 리렌더링되어도 current 속에 들어있는 값을 유지하는 변수
    // state는 속에 저장된 값이 변경되면 re-rendering되지만 ref변수는 
    // current 속에 들어있는 값이 변경되어도 re-rendering 되지 않는다
    const titleInput = useRef(null);
    // contentInput = {current:null};
    const contentInput = useRef(null);

    const [titleErrMsg, setTitleErrMsg] = useState('');
    const [contentErrMsg, setContentErrMsg] = useState('');

    // 제목과 내용이 입력 양식에 맞는지 검사해주는 함수
    // 제목과 내용이 정상적으로 입력되었다면 true, 아니면 false 가 return 되는 함수
    const checkInput = () => {
        // 버튼 클릭 시 제목이 입력되지 않았다면 errmsg 보여준 후에 해당 input태그에 커서가 깜빡이도록

        // 내용이 입력되지 않았다면 errmsg 보여준 후에 해당 input태그에 커서가 깜빡이도록
        // console.log('titleInput', titleInput);
        // console.log('contentInput', contentInput);

        // console.log(titleInput.current.value);

        //title : 사용자가 제목 input 태그에 입력한 문자열 값이 들어있다.
        const title = titleInput.current.value;
        //content : 사용자가 내용 textarea 태그에 입력한 문자열 값이 들어있다.
        const content = contentInput.current.value;

        let check = true; // flag 변수, check 에 기본 true 값을 넣어줌

        
        if(!content){
            setContentErrMsg('내용은 필수 입력 항목 입니다.');
            contentInput.current.focus();
            check = false;
        } else {
            setContentErrMsg('');
        }
        
        if(!title){ // title 에 비어있는 문자열이 들어있다면
            // 기본적으로 비어있는 문자열은 false 로 생각한다.
            // 따라서 !title --> title 이 비어있을 때 true 가 되어
            // if 문 안으로 들어온다.
            setTitleErrMsg('제목은 필수 입력 항목 입니다.');
            titleInput.current.focus();
            check = false;

        } else {
            setTitleErrMsg('');
        }

        return check;

    }

    const onPostBtnClick = ()=>{
        // 글쓰기 버튼 클릭시 실행되는 함수
        // 제목도 내용도 비어있지 않을 경우, 입력된 값들을 서버에 전달

        const title = titleInput.current.value; // 글쓰기 작성 시 입력한 title
        const content = contentInput.current.value; // 글쓰기 작성 시 입력한 content

        // checkInput() 이 true 라면 title 과 content 가 정상적으로 입력 됨
        if(checkInput()) {
            // 서버쪽에 데이터를 요청
            axios.post('http://localhost:3001/boards', 
            {title:title, content:content, userId:1})
            .then((res)=>{
                console.log(res);
                // res.data.data[0].insertId 에 내가 새롭게 추가한 게시글 id가 들어있다.
                // router.push('http://localhost:300/boards/')
                router.replace(`http://localhost:3002/boards/${res.data.newId}`);
                })
            .catch((err)=>{console.log(err)});
        }
    }

    const onUpdateBtnClick = () => {
        // console.log('수정버튼 클림 됨');
        const title = titleInput.current.value;
        const content = contentInput.current.value;

        if(!checkInput()) return;
        
        axios.put(`http://localhost:3001/boards/${router.query.boardId}`,{title, content})
        .then((res)=>{
            // res.data = {message: `${req.params.boardNum}번째 글 수정완료!`, target: `${req.params.boardNum}
            router.replace(`/boards/${res.data.target}`);
        })
        .catch((err)=>console.log(err));


    }
    return(
        <BoardWriteUI
            onPostBtnClick={onPostBtnClick}
            titleInput={titleInput}
            contentInput={contentInput}
            titleErrMsg={titleErrMsg}
            contentErrMsg={contentErrMsg}
            isUpdate={props.isUpdate}
            post={props.post}
            onUpdateBtnClick={onUpdateBtnClick}
        />
    );
}

export default BoardWrite;
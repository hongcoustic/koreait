import { IBoardDetailPresenterProps } from "../../../../commons/types/boardType";


const BoardDetailUI = (props:IBoardDetailPresenterProps) => {
    return(
        <>
            <h1>게시판 상세 페이지</h1>
            <h2>게시글 제목 : {props.data?.fetchBoard?.title}</h2>
            <h2>게시글 내용 : {props.data?.fetchBoard?.contents}</h2>
            <h2>게시글 작성자 : {props.data?.fetchBoard?.writer}</h2>
            <h2>게시글 작성일자 : {props.data?.fetchBoard?.createdAt}</h2>
            <button onClick={props.onUpdateClick}>수정하기</button>
        </>
    );
}

export default BoardDetailUI;
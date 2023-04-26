import BoardWriteUI from "./boardWrite.present"

const BoardWrite = () => {
    const onPostBtnClick = () => {
        // 글쓰기 버튼 클릭 시 실행되는 함수
        // 버튼 클릭 시, 제목이 입력되지 않았다면 에러 메세지를 보여주고
        // 해당 input 태그에 커서가 깜빡이도록 

        // 버튼 클릭 시, 내용이 입력되지 않았다면 에러 메세지를 보여주고
        // 해당 input 태그에 커서가 깜빡이도록 
        return(null);
    }
    return(
        <BoardWriteUI onPostBtnClick={onPostBtnClick} />
    );
}

export default BoardWrite;
import { IBoardWritePresenterProps } from "../../../../commons/types/boardType";
import { Button, Input, Title, Wrapper } from "./BoardWrite.styles";

const BoardWriteUI = (props:IBoardWritePresenterProps) => {

    return(
        <Wrapper>
            <Title>게시글 {props.isEdit ? '수정' : '작성'}하기</Title>
            <Input 
                placeholder="게시글 제목"
                ref={(el:HTMLInputElement)=>props.inputRefs.current[0] = el}
                defaultValue={props.data?.fetchBoard?.title} 
            />
            <Input 
                placeholder="게시글 내용" 
                ref={(el:HTMLInputElement)=>props.inputRefs.current[1] = el}
                defaultValue={props.data?.fetchBoard?.contents} 
            />
            <Input 
                placeholder="작성자" 
                ref={(el:HTMLInputElement)=>props.inputRefs.current[2] = el} 
                defaultValue={props.data?.fetchBoard?.writer} 
            />
            <Button onClick={props.onButton1}>게시글 {props.isEdit ? '수정' : '작성'}</Button>
        </Wrapper>
    );
}

export default BoardWriteUI;
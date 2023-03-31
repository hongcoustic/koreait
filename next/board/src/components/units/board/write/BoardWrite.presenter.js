import { Button, Input, Title, Wrapper } from "./BoardWrite.styles";

const BoardWriteUI = (props) => {

    return(
        <Wrapper>
            <Title>BoardWrite Page</Title>
            <Input placeholder="게시글 제목" ref={el=>props.inputRefs.current[0] = el} />
            <Input placeholder="게시글 내용" ref={el=>props.inputRefs.current[1] = el} />
            <Input placeholder="작성자" ref={el=>props.inputRefs.current[2] = el} />
            <Button onClick={props.onButton1}>버튼 1</Button>
        </Wrapper>
    );
}

export default BoardWriteUI;
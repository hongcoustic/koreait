import Layout from "@/components/common/layout";
import { BoardMain, BoardWriteContentInput, BoardWriteInput, BoardWriteInputFlexContainer, BoardWriteInputLabel, BoardWriteInputWrap, BoardWriteTitle, BoardWriteWrap, ErrMsg, PostBtn, RequiredMark } from "@/styles/boards/boardWrite.styles";

const BoardWriteUI = (props) => {
    return(
        <Layout>
            <BoardMain>
                <BoardWriteWrap>
                    <BoardWriteTitle>게시물 등록</BoardWriteTitle>
                    <BoardWriteInputFlexContainer>
                        <BoardWriteInputWrap>
                            <BoardWriteInputLabel>제목<RequiredMark>*</RequiredMark></BoardWriteInputLabel>
                            <BoardWriteInput placeholder={'제목을 입력하세요'} />
                            <ErrMsg></ErrMsg>
                        </BoardWriteInputWrap> 
                        <BoardWriteInputWrap>
                            <BoardWriteInputLabel>내용<RequiredMark>*</RequiredMark></BoardWriteInputLabel>
                            <BoardWriteContentInput placeholder={'내용을 입력하세요'} />
                            <ErrMsg></ErrMsg>
                        </BoardWriteInputWrap> 
                    </BoardWriteInputFlexContainer>
                    <PostBtn onClick={props.onPostBtnClick}>등록하기</PostBtn>
                </BoardWriteWrap>
            </BoardMain>
        </Layout>
    );
}

export default BoardWriteUI;
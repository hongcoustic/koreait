import { Row } from "antd";
import { ListWrap, RowItem } from "./BoardList.styles";
import { IBoardListPresenterProps } from "../../../../commons/types/boardType";


const BoardListUI = (props:IBoardListPresenterProps) => {
    const {data, onButtonClick, onNewBoard} = props;
    return(
        <>
            <button onClick={onNewBoard}>게시글 작성</button>
            <ListWrap>
                <Row>
                    <RowItem type={'number'}>번호</RowItem>
                    <RowItem type={'title'}>제목</RowItem>
                    <RowItem type={'date'}>작성일</RowItem>
                    <RowItem type={'writer'}>작성자</RowItem>
                </Row>
                {
                    data?.fetchBoards?.map((v:any, idx:number)=>{return(
                        <Row key={v.number}>
                            <RowItem type={'number'}>
                                {idx + 1}
                            </RowItem>
                            <RowItem type={'title'}
                                onClick={()=>onButtonClick(v.number)}
                            >
                                {v.title}
                            </RowItem>
                            <RowItem type={'date'}>
                                {v.createdAt}
                            </RowItem>
                            <RowItem type={'writer'}>
                                {v.writer}
                            </RowItem>
                        </Row>
                    );})
                }
                {/* <Row>
                    <RowItem type={'number'}>{
                        data?.fetchBoards[0].number
                    }</RowItem>
                    <RowItem type={'title'}>{
                        data?.fetchBoards[0].title
                    }</RowItem>
                    <RowItem type={'date'}>{
                        data?.fetchBoards[0].createdAt
                    }</RowItem>
                    <RowItem type={'writer'}>{
                        data?.fetchBoards[0].writer
                    }</RowItem>
                </Row>
                <Row>
                    <RowItem type={'number'}>{
                        data?.fetchBoards[1].number
                    }</RowItem>
                    <RowItem type={'title'}>{
                        data?.fetchBoards[1].title
                    }</RowItem>
                    <RowItem type={'date'}>{
                        data?.fetchBoards[1].createdAt
                    }</RowItem>
                    <RowItem type={'writer'}>{
                        data?.fetchBoards[1].writer
                    }</RowItem>
                </Row>
                <Row>
                    <RowItem type={'number'}>{
                        data?.fetchBoards[2].number
                    }</RowItem>
                    <RowItem type={'title'}>{
                        data?.fetchBoards[2].title
                    }</RowItem>
                    <RowItem type={'date'}>{
                        data?.fetchBoards[2].createdAt
                    }</RowItem>
                    <RowItem type={'writer'}>{
                        data?.fetchBoards[2].writer
                    }</RowItem>
                </Row> */}



            </ListWrap>
        </>

    );
}

export default BoardListUI;
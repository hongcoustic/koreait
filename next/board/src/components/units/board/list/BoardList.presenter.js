import { Row } from "antd";
import { ListWrap, RowItem } from "./BoardList.styles";

const BoardListUI = (props) => {
    const {data, onButtonClick} = props;
    return(
        <ListWrap>
            <Row>
                <RowItem type={'number'}>번호</RowItem>
                <RowItem type={'title'}>제목</RowItem>
                <RowItem type={'date'}>작성일</RowItem>
                <RowItem type={'writer'}>작성자</RowItem>
            </Row>
            {
                data?.fetchBoards.map((v, idx)=>{return(
                    <Row key={v.number}>
                        <RowItem type={'number'}>
                            {idx + 1}
                        </RowItem>
                        <RowItem type={'title'}
                            onClick={onButtonClick}
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

    );
}

export default BoardListUI;
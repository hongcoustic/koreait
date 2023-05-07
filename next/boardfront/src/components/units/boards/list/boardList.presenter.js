import Layout from "@/components/common/layout";
import { BoardHeader, BoardListWrap, BoardSearch, BoardTableHeader, BoardTableRow, Line, SearchBtn, SearchWrap, WriteBtn } from "@/styles/boards/boardList.styles";
import { FormControl, InputLabel, MenuItem, Pagination, Select } from "@mui/material";
import PaginatedList from "./boardList";

const BoardListUI = (props) => {
    return (
        <Layout>
            <BoardListWrap>
                <h1>게시글 목록!</h1>
                <Line />
                <BoardHeader>
                    <p>게시글</p>
                    <SearchWrap>
                        <BoardSearch 
                        ref={props.searchInput}
                        onKeyDown={props.onEnterDown}
                        />
                        <SearchBtn onClick={props.onSearchClick}>검색</SearchBtn>
                        <FormControl variant="standard" sx={{m: 2, minWidth: 140}}>
                            <InputLabel>정렬방식</InputLabel>
                            <Select value={props.selectValue} onChange={props.onSelectChange}>
                                <MenuItem value={1}>최신순</MenuItem>
                                <MenuItem value={2}>수정일순</MenuItem>
                                <MenuItem value={3}>오래된순</MenuItem>
                            </Select>
                        </FormControl>
                    </SearchWrap>
                </BoardHeader>
                <BoardTableHeader>
                    <p>NO</p>
                    <p>제목</p>
                    <p>작성자</p>
                    <p>작성일자</p>
                    <p>수정일자</p>
                </BoardTableHeader>
                <PaginatedList 
                postsList={props.postsList}
                currentPage={props.currentPage}
                onTitleClick={props.onTitleClick}
                searchText={props.searchText}
                selectValue={props.selectValue}
                />
                <WriteBtn onClick={props.onWriteBtnClick}>글쓰기</WriteBtn>
                <Pagination 
                count={props.totalPage}
                page={props.currentPage}
                onChange={props.onPageClick}
                 />
            </BoardListWrap>
        </Layout>
    );
}

export default BoardListUI;
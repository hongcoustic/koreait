import { BoardTableRow } from "@/styles/boards/boardList.styles";


// 사용할 BoardList Component
const PaginatedList = ({postsList, currentPage, onTitleClick, searchText, selectValue}) => {
    
    // props.postList --> 전체 게시글
    // props.currentPage --> 현재 보고있는 페이지
    // props.onTitleClick --> 제목을 클릭했을 때 실행시킬 함수
    
    // postsList 에서 입력된 검색어가 제목에 포함되어있는 배열로 만들기
    // filter 함수를 통해 원하는 조건을 만족하는 요소들만 뽑아서 배열 만들기
    let filteredList = postsList;
    if(searchText !== null){
        filteredList = postsList.filter((post)=>post.pTitle.includes(searchText));
    }

    // filteredList 에서 검색어 골라낸 배열을 다시 정렬 방식에 따라서 수정
    // selectValue : 1 -> 최신순
    // selectValue : 2 -> 수정일순
    // selectValue : 3 -> 오래된순

    let sortedList = filteredList;
    if(selectValue === 1){
        sortedList.sort((a, b)=>{
            return new Date(b.createdAt) - new Date(a.createdAt);
        })
    }
    if(selectValue === 2){
        sortedList.sort((a, b)=>{
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        })
    }
    if(selectValue === 3){
        sortedList.sort((a, b)=>{
            return new Date(a.createdAt) - new Date(b.createdAt);
        })
    }
    

    const paginatedListItem = filteredList.slice((currentPage-1) * 10, currentPage * 10);
    // paginatedListItem 배열에는 우리가 보고자 하는 페이지에 해당하는 10개의 게시글이 들어있다.
    return (
        <>
            {
                paginatedListItem.map(
                    (v, idx) => <BoardTableRow key={v.pId}>
                        <p>{idx+1 + (currentPage-1)*10}</p>
                        <p onClick={()=>{onTitleClick(v.pId)}}>{v.pTitle}</p>
                        <p>{v.userId}</p>
                        <p>{v.createdAt.substr(0, 10)}</p>
                        <p>{v.updatedAt.substr(0, 10)}</p>
                    </BoardTableRow>
                )
            }
        </>
    );
}

export default PaginatedList;
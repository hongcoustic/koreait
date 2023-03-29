import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:340){
            writer
            title
            contents
            createdAt
        }
    }
`

const Post1Page =  () => {
    const {data} = useQuery(FETCH_BOARD); // a는 FETCH_BOARD 실행시킨 값
    console.log(data);
    return (
        <>
            1번 게시글 페이지 입니다.
            <h1>{data === undefined ? '불러오는중' : data.fetchBoard.title}</h1>
            <h1>{data === undefined ? '불러오는중' : data.fetchBoard.writer}</h1>
            <h1>{data === undefined ? '불러오는중' : data.fetchBoard.contents}</h1>
            <h1>{data === undefined ? '불러오는중' : data.fetchBoard.createdAt}</h1>
        </>
    );
}

export default Post1Page;
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number:$number){
            writer
            title
            contents
            createdAt
        }
    }
`

const Post1Page =  () => {
    const router = useRouter();
    const {data} = useQuery(FETCH_BOARD, {variables:{number: Number(router.query.boardNumber)}}); // data는 FETCH_BOARD 실행시킨 값
    console.log(data);
    return (
        <>
            {router.query.boardNumber}번 게시글 페이지 입니다.
            {/* <h1>{data === undefined ? '불러오는중' : data.fetchBoard.title}</h1>
            <h1>{data === undefined ? '불러오는중' : data.fetchBoard.writer}</h1>
            <h1>{data === undefined ? '불러오는중' : data.fetchBoard.contents}</h1>
            <h1>{data === undefined ? '불러오는중' : data.fetchBoard.createdAt}</h1> */}
            <h1>제목 : {data?.fetchBoard.title}</h1>
            <h1>작성자 : {data?.fetchBoard.writer}</h1>
            <h1>내용 : {data?.fetchBoard.contents}</h1>
            <h1>작성일 : {data?.fetchBoard.createdAt}</h1>
        </>
    );
}

export default Post1Page;
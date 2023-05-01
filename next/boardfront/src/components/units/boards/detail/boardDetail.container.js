import { useEffect, useState } from "react";
import BoardDetailUI from "./boardDetail.presenter";
import { FETCH_BOARD } from "@/api/board/board.api";
import { useRouter } from "next/router";

const BoardDetail = ()=>{
    const router = useRouter();
    // state변수를 만들어야 한다.
    // 최초에는 Null 이 들어있고, 데이터를 받아오는 것은 비동기 함수로 실행되기 때문에
    // 데이터가 필요없는 디자인은 미리 그려두고, 
    // 데이터를 다 받아오면 setPost()가 실행되어 post 속의 값이 변하면서 다시 렌더링 된다.
    const [post, setPost] = useState(null);
    useEffect(()=>{
        if(!router.isReady) return;
        FETCH_BOARD(router.query.boardId)
        .then((res)=>{setPost(res.data.fetch_board)})
        .catch((err)=>console.log(err));
    }, [router.isReady]);

    const onMoveToUpdate = () => {
        router.push(`http://localhost:3002/boards/${router.query.boardId}/update`);
    }

    return(
        <BoardDetailUI
        post={post}
        onMoveToUpdate={onMoveToUpdate}
        />
    );
}

export default BoardDetail;
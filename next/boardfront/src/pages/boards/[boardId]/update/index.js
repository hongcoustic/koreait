import { FETCH_BOARD } from "@/api/board/board.api";
import BoardWrite from "@/components/units/boards/write/boardWrite.container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoardUpdatePage = () => {
    const [post, setPost] = useState(null);
    const router = useRouter();
    console.log(router);
    useEffect(()=>{
        if(router.isReady){
            FETCH_BOARD(router.query.boardId)
            .then((res)=>{setPost(res.data.fetch_board)})
            .catch((err)=>{console.log(err)});
        }
    },[router.isReady]);
    return(
        <BoardWrite isUpdate post={post} />
    );
}

export default BoardUpdatePage;
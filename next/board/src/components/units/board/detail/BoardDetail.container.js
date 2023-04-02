import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

const BoardDetail = () => {
    const router = useRouter();
    
    const {data} = useQuery(FETCH_BOARD, {
        variables:{number:Number(router.query.boardNum)}
    });

    const onUpdateClick = () => {
        router.push(`/boards/${router.query.boardNum}/update`);
    }

    return (
        <BoardDetailUI 
        data={data} 
        onUpdateClick={onUpdateClick}/>
    );
}

export default BoardDetail;
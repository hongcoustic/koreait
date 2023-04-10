import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

const BoardList = () => {
    const {data} = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);
    const router = useRouter();
    const onButtonClick = (number:number) => {
        router.push(`/boards/${number}`);
    }
    
    const onNewBoard = () => {
        router.push('/boards/new');
    }
    return(<BoardListUI 
            data={data!}
            onButtonClick={onButtonClick}
            onNewBoard={onNewBoard}
        />);
}

export default BoardList;
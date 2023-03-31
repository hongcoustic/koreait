import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

const BoardList = () => {
    const {data} = useQuery(FETCH_BOARDS);
    const router = useRouter();
    const onButtonClick = (number) => {
        router.push(`/05/${number}`);
    }
    return(<BoardListUI 
            data={data}
            onButtonClick={onButtonClick}
        />);
}

export default BoardList;
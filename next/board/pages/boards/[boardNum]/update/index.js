import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import { useQuery } from "@apollo/client";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";

const BoardUpdatePage = () => {
    const router = useRouter();
    // 게시글 작성(new) 페이지라면, router.query.boardN?um 이 undefined 상태임
    // 따라서 data 를 불러와도 data.fatchBoard 에는 null 값이 들어있다.
    // BoardWriteUI 부분에서 defaultValue 를 쓸 때, date.fatchBoard?.title 로 작성해야한다. (fetchBoard가 null 이면 안그려줌)
    const {data} = useQuery(FETCH_BOARD, {variables:{number:Number(router.query.boardNum)}});

    return(<BoardWrite isEdit={true} data={data}/>);
}

export default BoardUpdatePage;
import { useRouter } from "next/router";

const QueryPage = () => {
    const router = useRouter();
    const onButton1Click = () => {
        router.push('/05/1');
    }

    return(
        <>
            <h1>Query Page</h1>
            <button onClick={onButton1Click}>1번 게시글 이동하기</button>
            <button>2번 게시글 이동하기</button>
            <button>3번 게시글 이동하기</button>
        </>
    );
}

export default QueryPage;
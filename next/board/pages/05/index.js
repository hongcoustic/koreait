import { useRouter } from "next/router";

const QueryPage = () => {
    const router = useRouter();
    const onButton1Click = () => {
        router.push('/05/25000');
    }
    const onButton2Click = () => {
        router.push('/05/25001');
    }
    const onButton3Click = () => {
        router.push('/05/25002')
    }

    return(
        <>
            <h1>Query Page</h1>
            <button onClick={onButton1Click}>25000번 게시글 이동하기</button>
            <button onClick={onButton2Click}>25001번 게시글 이동하기</button>
            <button onClick={onButton3Click}>25002번 게시글 이동하기</button>
        </>
    );
}

export default QueryPage;
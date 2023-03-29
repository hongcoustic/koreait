import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";

const CREATE_NEW_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) { #변수 이름과 타입 적는 곳
        createBoard(
            writer: $writer,
            title: $title,
            contents: $contents
            #실제 전달되는 변수들
        ){
            _id
            number
            message
        }
    }
`;

const GQLPage = () => {
    const [createNewBoard] = useMutation(CREATE_NEW_BOARD);
    const inputRefs = useRef([]);

    const onButton1 = async () => {
        // 게시글 등록
        const title = inputRefs.current[0].value;
        const contents = inputRefs.current[1].value;
        const writer = inputRefs.current[2].value;
        console.log(title, contents, writer);
        let res = await createNewBoard( {variables: { writer: writer, title: title, contents: contents } } );
        console.log(res);
        console.log(res.data.createBoard.message);
        console.log(inputRefs);
    }

    return (
        <>
            <h1>GQL Page</h1>
            <input placeholder="게시글 제목" ref={el=>inputRefs.current[0] = el} />
            <input placeholder="게시글 내용" ref={el=>inputRefs.current[1] = el} />
            <input placeholder="작성자" ref={el=>inputRefs.current[2] = el} />
            <button onClick={onButton1}>버튼 1</button>
        </>
    );
}

export default GQLPage;
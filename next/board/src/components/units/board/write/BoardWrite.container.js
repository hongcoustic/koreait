import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_NEW_BOARD } from "./BoardWrite.query";

const BoardWrite = () => {
    const [createNewBoard] = useMutation(CREATE_NEW_BOARD);
    const router = useRouter();

    const inputRefs = useRef([]);

    const onButton1 = async () => {
        // 게시글 등록
        const title = inputRefs.current[0].value;
        const contents = inputRefs.current[1].value;
        const writer = inputRefs.current[2].value;

        console.log(title, contents, writer);

        try{
            let res = await createNewBoard( {variables: { writer: writer, title: title, contents: contents } } );
            console.log(res);
            console.log(res.data.createBoard.message);
            console.log(inputRefs);
            router.push(`/05/${res.data.createBoard.number}`)
        }catch(err){
            console.log(err);
        }
    }
    return(
        <BoardWriteUI 
        inputRefs={inputRefs}
        onButton1={onButton1} />
    );
}

export default BoardWrite;
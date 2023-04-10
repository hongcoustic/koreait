import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_NEW_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import { IBoardWriteContainerProps } from "../../../../commons/types/boardType";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from "../../../../commons/types/generated/types";

const BoardWrite = (props:IBoardWriteContainerProps) => {
    const [createNewBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_NEW_BOARD);
    const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(UPDATE_BOARD);
    const router = useRouter();

    const inputRefs = useRef<HTMLInputElement[]>([]);

    const onButton1 = async () => {
        // 게시글 등록 버튼 함수
        const title = inputRefs.current[0].value;
        const contents = inputRefs.current[1].value;
        const writer = inputRefs.current[2].value;
        try{
            let res = await createNewBoard( {variables: { writer: writer, title: title, contents: contents } } );
            console.log(res);
            console.log(res.data?.createBoard?.message);
            console.log(inputRefs);
            router.push(`/boards/${res.data?.createBoard?.number}`)
        }catch(err){
            console.log(err);
        }
    }
    
    const onUpdate = async () => {
        // 게시글 수정 버튼 함수
        try{
            let res = await updateBoard({variables: {
                number: Number(router.query.boardNum), 
                writer: inputRefs.current[2].value, 
                title: inputRefs.current[0].value, 
                contents: inputRefs.current[1].value}
            });
            alert(res.data?.updateBoard?.message);

            router.push(`/boards/${res.data?.updateBoard?.number}`);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <BoardWriteUI 
            inputRefs={inputRefs}
            onButton1={props.isEdit ? onUpdate : onButton1} 
            isEdit={props.isEdit}
            data={props.data}

        />
    );
}

export default BoardWrite;
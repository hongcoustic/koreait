import styled from "@emotion/styled";
import { useRouter } from "next/router";

const NotFoundPage = () => {
    const router = useRouter();

    const onButtonClick = () => {
        router.push('/');
    }

    return(
        <NotFoundWrap>
            <h1>404</h1>
            <div></div>
            <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
            <button onClick={onButtonClick}>메인으로 이동</button>
        </NotFoundWrap>
    );
}

export default NotFoundPage;

const NotFoundWrap = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    background-color : #e9e9e9;
    row-gap: 30px;

    & > h1{
        font-size: 100px;
    }

    & > div{
        height: 3px;
        width: 70px;
        background-color: black;
    }

    & > p{
        font-size: 20px;
    }

    & > button {
        cursor: pointer;
        border-radius: 0;
        padding: 10px 30px;
        background-color: white;
        border: 3px solid black;
        transition: 300ms;
    }

    & > button:hover {
        transform: scale(1.1);
    }
`;


import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import SideBar from "../component/sideBar";

const HomePage = () => {
    // menuOpen 변수에 ture --> 메뉴 열림
    // menuOpen 변수에 flase --> 메뉴 닫힘, 초기값은 닫혀있는 상태
    const [menuOpen, setMenuOpen] = useState(false);

    const subtitle = "메인페이지 입니다."
    const detail = "리액트 문제를 풀어보며 실력을 향상하자!"
    return(
        <>
            <Header subtitle={subtitle} detail={detail} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></SideBar>
        <ul>
            <li>
                <Link to='/'>홈페이지로 이동하기</Link>
            </li>
            <li>
                <Link to='/counter'>counter로 이동하기</Link>
            </li>
            <li>
                <Link to='/operator'>삼항연산자 및 논리연산자로 이동하기</Link>
            </li>
            <li>
                <Link to='/material'>material ui 적용해보기</Link>
            </li>
            </ul>
        </>

    );
}

export default HomePage;
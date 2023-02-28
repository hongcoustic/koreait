import styled from "styled-components";
import logo from "../assets/logo192.png";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = ({subtitle, detail, menuOpen, setMenuOpen}) => {

    const menuClick = () => {
        setMenuOpen(true);
        console.log(setMenuOpen);
    }

    return(
        <>
            <HeaderNav>
                <div>
                    <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
                    <img src={logo} alt="logo" />
                    <h1>React Aaron</h1>
                </div>
                <MenuIcon onClick={menuClick}></MenuIcon>
            </HeaderNav>
            <HeaderWrap>
                <h1>도전 리액트 박살내기!</h1>
                <h2>{subtitle}</h2>
                <p>{detail}</p>
                <Line></Line>
            </HeaderWrap>
        </>
    );
}

export default Header;

const Line = styled.div`
    display: inline-block;
    border-bottom: 3px solid #6e6e73;
    width: 150px;
`

const HeaderWrap = styled.div`
    text-align: center;
    margin-bottom: 30px;

`

const HeaderNav = styled.nav`
    padding: 0px 2%;
    display: flex;
    height: 60px;
    background-color: white;
    box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    position: relative;

    & > div {
        display: flex;
        align-items: center;
    }

    & > div > h1 {
        color: #61dafb;
        font-size: 20px
    }

    & > div > img {
        width: 50px
    }


`
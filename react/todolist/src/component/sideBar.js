import styled from "styled-components";
import VirtualizedList from "./list";
import CloseIcon from '@mui/icons-material/Close';

const SideBar = ({menuOpen, setMenuOpen}) => {

    return (
        <SideBarWrap menuOpen={menuOpen}>
            <MyClose onClick={()=>setMenuOpen(false)}/>
            <VirtualizedList></VirtualizedList>
        </SideBarWrap>

    );
}

export default SideBar;

const MyClose = styled(CloseIcon)`
    padding: 10px;
    &:hover{
        cursor: pointer;
    }
`

const SideBarWrap = styled.div`
    width: 300px;
    height: 100%;
    background-color: white;
    position: fixed;
    right: 0;
    top: 60px;
    z-index: 1;
    transform: translateX(300px) ${({menuOpen})=> menuOpen && 'translateX(-300px)'};
`
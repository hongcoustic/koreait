import styled from "styled-components";

const BottomSheetHeader = (props) => {

    return (
        <HeaderWrap>
            <MyIcon onClick={()=>props.setIsOpen(false)}>X</MyIcon>
            <h2>2023년 03월 01 일정 추가하기</h2>
        </HeaderWrap>
    );
}

export default BottomSheetHeader;

const HeaderWrap = styled.div`
    border-bottom: 1px solid #e9e9e9;
    padding: 20px 0;
    position: relative;

    & h2{
        font-size: 20px;
        text-align: center;
        font-weight: normal;

    }
`

const MyIcon = styled.div`
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    left: 0;
    cursor:pointer;
`
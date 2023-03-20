import styled from "styled-components";
import BottomSheetContent from "./9_bottomSheetContent";

const BottomSheet = (props) => {
    const {date, isOpen, setIsOpen, scheduleList, setScheduleList} = props;
    return(
        <BottomSheetWrap isOpen={isOpen}>
            <BottomSheetContent
            date={date} 
            setIsOpen={setIsOpen} 
            scheduleList={scheduleList}
            setScheduleList={setScheduleList}
            />
        </BottomSheetWrap>
    );
}

export default BottomSheet;


const BottomSheetWrap = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;

    display: ${({isOpen})=>isOpen || 'none'};

`
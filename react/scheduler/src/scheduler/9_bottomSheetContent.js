import { Button, TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";
import BottomSheetHeader from "./10_bottomSheetHeader";

const BottomSheetContent = (props) => {
    const {date, setIsOpen, scheduleList, setScheduleList} = props;
    const [sTime, setSTime] = useState(dayjs());
    const [eTime, setETime] = useState(dayjs());
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    const onAdd = () => {
        // 유효성 검사
        if(parseInt(sTime.format('HH')) >= parseInt(eTime.format('HH'))){
            alert('시작 시작과 종료 시간을 다시 설정해주세요.');
            return;
        }

        // 추가할 스케쥴 객체 만들기
        const key = date.format('YYYYMMDD');
        let newId = 0;
        
        if(scheduleList[key] === undefined || scheduleList[key].length === 0){
            newId = 1;
        } else {
            newId = scheduleList[key][scheduleList[key].length - 1].id + 1
        }
        
        const newSchedule = {
            id:newId, 
            title, // title: title변수속값
            detail, 
            isComplete:false,
            sTime: sTime.format('HH:mm'),
            eTime: eTime.format('HH:mm')
        }
        
        // 원본하고 완전히 동일한 스케쥴 리스트 생성
        const copy = JSON.parse(JSON.stringify(scheduleList));
        if(copy[key] === undefined){
            copy[key] = [newSchedule];
        } else {
            copy[key].push(newSchedule);
        }

        setScheduleList(copy);

        setIsOpen(false);
        setTitle('');
        setDetail('');
        setSTime(dayjs());
        setETime(dayjs());
    }

    return (
        <ContentWrap>
            <BottomSheetHeader setIsOpen={setIsOpen} />
            <BodyWrap>
                <TimeZone>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker 
                        value={sTime} 
                        onChange={(v)=>setSTime(v)}
                        label="시작 시간"/>
                        <TimePicker 
                        value={eTime} 
                        onChange={(v)=>setETime(v)}
                        label="종료 시간"/>
                    </LocalizationProvider>
                </TimeZone>
                <TextZone>
                <TextField 
                id="standard-basic" 
                label="일정 제목" 
                variant="standard"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <TextField 
                multiline 
                label="상세 내용" 
                rows={4}
                value={detail}
                onChange={(e)=>setDetail(e.target.value)}
                />
                </TextZone>
            </BodyWrap>
            <Button variant="contained" onClick={onAdd}>추가하기</Button>
        </ContentWrap>
    );
}

export default BottomSheetContent;

const ContentWrap = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 40px 50px;
`;

const BodyWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TimeZone = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    justify-content: center;
    border-right: 3px dotted #e9e9e9;
    @media screen and (max-width: 768px){
        border: none;
        width: 100%;
    }
`;

const TextZone = styled.div`
    flex-grow: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    justify-content: center;
`;
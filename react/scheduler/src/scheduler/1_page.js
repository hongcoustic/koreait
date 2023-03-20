import { useState } from 'react';
import styled from 'styled-components';
import SchedulerHeader from './2_schedulerHeader';
import SchedulerTemplate from './3_schedulerTemplate';
import SchedulerCalendar from './4_schedulerCalendar';
import dayjs from 'dayjs';
import SchedulerContent from './5_schedulerContent';
import BottomSheet from './8_bottomSheet';

const initialData = {
    '20230301':[
      {
        id:1, 
        title:'장보기', 
        detail:'저녁거리를 사러 가야함', 
        isComplete:true,
        sTime:'10:00',
        eTime:'11:00', 
      },
      {
        id:2, 
        title:'장보기', 
        detail:'저녁거리를 사러 가야함', 
        isComplete:false,
        sTime:'10:00',
        eTime:'11:00', 
      },
    ],
    '20230302':[
      {
        id:1, 
        title:'장보기', 
        detail:'저녁거리를 사러 가야함', 
        isComplete:true,
        sTime:'10:00',
        eTime:'11:00', 
      },
    ],
    '20230303':[
      {
        id:1, 
        title:'장보기', 
        detail:'저녁거리를 사러 가야함', 
        isComplete:true,
        sTime:'10:00',
        eTime:'11:00', 
      }
    ]
  };

// schedule 의 총 갯수 구하는 함수 (매개변수로 scheduleList 와 내가 보고싶은 날짜를 받아와서)
// 함수 사용 결과는 schedule 갯수 return
const getScheduleCnt = (date, scheduleList) => {
    const key = date.format('YYYYMMDD');
    if(scheduleList[key] === undefined){
        return 0;
    }
    return scheduleList[key].length;
}

// 완료된 schedule 갯수 구하는 함수 (매개변수로 scheduleList 와 내가 보고싶은 날짜를 받아와서)
// 함수 사용 결과는 완료된 갯수 return

const getCompletefdCnt = (date, scheduleList) => {
    const key = date.format('YYYYMMDD');
    if(scheduleList[key] === undefined){
        return 0;
    }

    return scheduleList[key].filter((v)=>v.isComplete).length;
}

const MainPage= ()=>{
    const [date, setDate] = useState(dayjs());
    const [scheduleList, setScheduleList] = useState(initialData)
    const [isOpen, setIsOpen] = useState(false);
    console.log(date);

    const scheduleCnt = getScheduleCnt(date, scheduleList);
    const completedCnt = getCompletefdCnt(date, scheduleList);

    return(
        <MainWrap>
            <SchedulerHeader/>
            <SchedulerTemplate>
                <SchedulerCalendar 
                date={date} 
                setDate={setDate}
                scheduleCnt={scheduleCnt}
                />
                <SchedulerContent 
                date={date} 
                scheduleList={scheduleList} 
                scheduleCnt={scheduleCnt}
                completedCnt={completedCnt}
                setScheduleList={setScheduleList}
                setIsOpen={setIsOpen}
                />
            </SchedulerTemplate>
            <BottomSheet 
            date={date}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            scheduleList={scheduleList}
            setScheduleList={setScheduleList}
            />
        </MainWrap>
    );
}

export default MainPage;

const MainWrap = styled.div`
    width: 100%;
    max-width: 1200px;

    margin: 0 auto;
`;
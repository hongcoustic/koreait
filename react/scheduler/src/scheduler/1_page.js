import { useState } from 'react';
import styled from 'styled-components';
import SchedulerHeader from './2_schedulerHeader';
import SchedulerTemplate from './3_schedulerTemplate';
import SchedulerCalendar from './4_schedulerCalendar';
import dayjs from 'dayjs';
import SchedulerContent from './5_schedulerContent';

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

const MainPage= ()=>{
    const [date, setDate] = useState(dayjs());
    const [scheduleList, setScheduleList] = useState()
    console.log(date);
    return(
        <MainWrap>
            <SchedulerHeader/>
            <SchedulerTemplate>
                <SchedulerCalendar date={date} setDate={setDate}></SchedulerCalendar>
                <SchedulerContent date={date}></SchedulerContent>
            </SchedulerTemplate>
        </MainWrap>
    );
}

export default MainPage;

const MainWrap = styled.div`
    width: 100%;
    max-width: 1200px;

    margin: 0 auto;
`;
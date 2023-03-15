import styled from "styled-components";
import ScehdulerListCard from "./6_schedulerListCard";

// 논리 처리(날짜와 스케쥴리스트를 받아서 해당 날짜의 스케쥴들이 들어있는 ListCard를 return 해주는 함수)
const getListCards = (date, scheduleList, f) => {
    const key = date.format('YYYYMMDD');

    if(scheduleList[key] === undefined){
        return <p>일정을 추가해주세요</p>;
    }
    return scheduleList[key].map(
        (v) => <ScehdulerListCard 
            key={v.id}
            completed={v.isComplete}
            title={v.title}
            detail={v.detail}
            sTime={v.sTime}
            eTime={v.eTime}
            onClick={()=>{f(v.id)}}
            
        />
    );
}

const SchedulerContent = (props) => {
    const {date,scheduleList,scheduleCnt,completedCnt,setScheduleList} = props;
    
    // ListCard 클릭 시, 활성화/비활성화
    const onCompleteClick = (id) => {
        console.log('oncomplteClick 함수 실행됨!');
        const key = date.format('YYYYMMDD');
        const tmp = JSON.stringify(scheduleList); // 객체를 문자열로 변환
        const copy = JSON.parse(tmp); // 문자열을 객체로 변환, 완전히 같은데 완전히 새로운(주소가) 객체가 된다.

        const updatedSchedule = copy[key].map((v)=>
            v.id === id ? {...v, isComplete : !v.isComplete} : v
        );

        copy[key] = updatedSchedule;

        setScheduleList(copy);
    }

    const listCards = getListCards(date, scheduleList, onCompleteClick);

    return (
        <SchedulerContentWrap>
            <ContentHeader>
                <h2>{date.format('YYYY년 MM월 DD일')} 스케쥴</h2>
                <p>총 {scheduleCnt}개 항목 중 {completedCnt}개 완료!</p>
                <button>+</button>
            </ContentHeader>
            {listCards}
        </SchedulerContentWrap>
    );
}

export default SchedulerContent;

const SchedulerContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: scroll;
    padding: 0 20px;
    row-gap: 20px;
    align-items: center;


    &::-webkit-scrollbar{
        display: none;
    }

`;

const ContentHeader = styled.div`
    border-bottom: 3px solid #e9e9e9;

    position: sticky; // relative 자동으로 적용
    z-index: 1;
    background-color: white;
    padding: 20px 0 10px;
    width: 100%;
    top: 0;
    
    & button{
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

`;
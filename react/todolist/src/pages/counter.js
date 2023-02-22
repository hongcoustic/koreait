import CounterNum from "../component/counterNum";
import Header from "../component/header";

const Counter = () => {
    return(
        <>
            <Header 
            subtitle="카운터 컴포넌트 입니다."
            detail="state 에 대해서 알아보는 시간을 갖겠습니다."
            />
            <CounterNum/>
        </>
    );
}

export default Counter;
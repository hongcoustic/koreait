import styled from "styled-components";

const SchedulerTemplate = ({children})=>{
    return (
        <SchedulerTemplateWrap>
            {children}
        </SchedulerTemplateWrap>
    );

}

export default SchedulerTemplate;

const SchedulerTemplateWrap = styled.div`
    display: flex;
    background-color: whilte;
    height: calc(100vh - 60px);
    justify-content: space-between;
    column-gap: 30px;
    min-height: 420px;

    @media screen and (max-width:768px){
        flex-direction: column;
    }

`;
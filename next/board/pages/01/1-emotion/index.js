import { InputBox, InputLabel, InputWrap, PageTitle } from "../../../styles/emotion";

const EmotionPage = () => {

    return(
        <>
            <PageTitle>Emotion Page 입니다.</PageTitle>
            <InputWrap>
                <InputLabel>이름</InputLabel>
                <InputBox />
            </InputWrap>
        </>
    );
}

export default EmotionPage;

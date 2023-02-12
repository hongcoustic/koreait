// 데이터베이승에서 포스트(feed) 데이터를 받아와서 배열에 넣어놓았다 가정.

const postList = [
    {
        pId : 'm001',
        pIcon : '../images/edu_icon.png',
        pTitle : '에듀윌',
        pContent : '🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
        pImage : '../images/sample-image.jpg',
        pCompany : 'EDUWILL.NET',
        pText : '입문교재 선착순 무료신청',
        pDetail : '합격자 수 1위 에듀윌 공인중개사'
    },
    {
        pId : 'm002',
        pIcon : '../images/edu_icon.png',
        pTitle : '에듀윌',
        pContent : '🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
        pImage : '../images/game-1.jpg',
        pCompany : 'EDUWILL.NET',
        pText : '입문교재 선착순 무료신청',
        pDetail : '합격자 수 1위 에듀윌 공인중개사'
    },
    {
        pId : 'm003',
        pIcon : '../images/edu_icon.png',
        pTitle : '에듀윌',
        pContent : '🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
        pImage : '../images/game-2.jpg',
        pCompany : 'EDUWILL.NET',
        pText : '입문교재 선착순 무료신청',
        pDetail : '합격자 수 1위 에듀윌 공인중개사'
    },
    {
        pId : 'm004',
        pIcon : '../images/edu_icon.png',
        pTitle : '에듀윌',
        pContent : '🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
        pImage : '../images/game-3.jpg',
        pCompany : 'EDUWILL.NET',
        pText : '입문교재 선착순 무료신청',
        pDetail : '합격자 수 1위 에듀윌 공인중개사'
    },
    {
        pId : 'm005',
        pIcon : '../images/edu_icon.png',
        pTitle : '에듀윌',
        pContent : '🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
        pImage : '../images/game-a.jpg',
        pCompany : 'EDUWILL.NET',
        pText : '입문교재 선착순 무료신청',
        pDetail : '합격자 수 1위 에듀윌 공인중개사'
    },

];

const request = {
    getPostList : function(){
        return postList;
    }
}
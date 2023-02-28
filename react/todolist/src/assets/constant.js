// 경로와 텍스트 관리
import GuestBookPage from "../1_guestbook/1_guestBook";
import Counter from "../pages/counter";
import HomePage from "../pages/homePage";
import MapPage from "../pages/mapPage";
import MaterialTestPage from "../pages/material";
import OpPage from "../pages/operatorPage";


export const paths = [
    {path:'/', title:'홈페이지로 이동하기', component:<HomePage /> },
    {path:'/counter', title:'카운터 페이지로 이동하기' , component:<Counter />},
    {path:'/operator', title:'논리,삼항 연산자 사용해보기', component:<OpPage />},
    {path:'/material', title:'material ui 사용해보기', component:<MaterialTestPage />},
    {path:'/map', title:'map()을 이용해 반복되는 컴포넌트 추가하기', component:<MapPage />},
    {path:'/online-guest-book', title:'온라인 방명록', component:<GuestBookPage />}
];
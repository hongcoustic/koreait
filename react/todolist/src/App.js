import styled from 'styled-components'

// App : 사용자가 만든 새로운 컴포넌트

// App 이라는 컴포넌트를 만들겠다.
function App() {
  return (
    <>
      <MyH1>css를 적용한 나의 h1태그 입니다.</MyH1>
      <h2>'안녕하세요'</h2>
      <p>App 이라는 컴포넌트를 만들고 있습니다.</p>
    </>
  );
}

export default App;

// styled-components 사용하기
// styled.컴포넌트이름`
//  css문법
// `
const MyH1 = styled.h1`
  font-size: 20px;
  color: blue;
  text-align: center;
`
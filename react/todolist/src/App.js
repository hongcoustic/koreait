import { paths } from './assets/constant';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from './styles/globalStyle';

function App() {
  const routes = paths.map((value)=> <Route path={value.path} element={value.component} key={value.path} />);
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
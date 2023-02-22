import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Counter from './pages/counter';
import HomePage from './pages/homePage';
import MaterialTestPage from './pages/material';
import OpPage from './pages/operatorPage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/operator' element={<OpPage />} />
        <Route path='/material' element={<MaterialTestPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
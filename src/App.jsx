import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './data/data';
import HomeHero from './Components/HomeHero';
import Mammals from './Components/Mammals'; // Anta att dessa komponenter finns
import Birds from './Components/Birds';
import Reptiles from './Components/Reptiles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHero />} />
        <Route path='mammals' element={<Mammals />} />
        <Route path='birds' element={<Birds />} />
        <Route path='reptiles' element={<Reptiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

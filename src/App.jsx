import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeHero from './Components/HomeHero';
import MammalsComponent from './Components/Mammals';
import BirdsComponent from './Components/Birds';
import ReptilesComponent from './Components/Reptiles';
import Sidebar from './Components/Sidebar';
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeHero />} />
          <Route path="mammals" element={<MammalsComponent />} />
          <Route path="birds" element={<BirdsComponent />} />
          <Route path="reptiles" element={<ReptilesComponent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

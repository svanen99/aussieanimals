import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeHero from './Components/HomeHero';
import Mammals from './Components/Mammals/Echidna';
import Birds from './Components/Birds';
import Reptiles from './Components/Reptiles';
import Sidebar from './Components/Sidebar';
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeHero />} />
          <Route path="mammals" element={<Mammals />} />
          <Route path="birds" element={<Birds />} />
          <Route path="reptiles" element={<Reptiles />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

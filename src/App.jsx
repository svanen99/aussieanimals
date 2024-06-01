import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeHero from './Components/HomeHero';
import EchidnaComponent from './Components/Echidna';
import BirdsComponent from './Components/Birds';
import ReptilesComponent from './Components/Reptiles';
import Sidebar from './Components/Sidebar';
import Layout from './Components/Layout';
import MammalsQuokka from './Components/Quokka/quokka';
import MammalsTasmaniandevil from './Components/Tasmaniandevil';
import KookaburraComponent from './Components/Kookaburra';
import YellowtailedComponent from './Components/Yellowtailed';
import CassowaryComponent from './Components/Cassowary';
import HawksbillturtleComponent from './Components/Hawksbillturtle';
import PerentieComponent from './Components/Perentie';
import FrillneckedlizardComponent from './Components/Frilled';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeHero />} />
          <Route path="echidna" element={<EchidnaComponent />} />
          <Route path="quokka" element={<MammalsQuokka />} />
          <Route path="tasmaniandevil" element={<MammalsTasmaniandevil />} />
          <Route path="kookaburra" element={<KookaburraComponent />} />
          <Route path="yellowtailedblackcockatoo" element={<YellowtailedComponent />} />
          <Route path="cassowary" element={<CassowaryComponent />} />
          <Route path="hawksbillturtle" element={<HawksbillturtleComponent />} /> 
          <Route path="perentie" element={<PerentieComponent />} /> 
          <Route path="frillneckedlizard" element={<FrillneckedlizardComponent/>} /> 
          <Route path="birds" element={<BirdsComponent />} />
          <Route path="reptiles" element={<ReptilesComponent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

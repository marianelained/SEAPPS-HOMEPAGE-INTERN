import { Route, Routes, HashRouter } from "react-router-dom";
import Homepage from './pages/Homepage';
import FAQs from './pages/FAQs';
import About from './pages/About';
import Services from './pages/Services'

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/FiliPay.html" element={<Services />} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

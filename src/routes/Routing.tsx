import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Works from '../pages/Works';
import About from '../pages/About';
import Contact from '../pages/Contact';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Routing;
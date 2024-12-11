import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import HowItWorks from './views/HowItWorks';
import Service from './views/Service';
import WhyUs from './views/WhyUs';
import Accordion from './views/Accordion';
import TestimonialsLink from './views/TestimonialsLink';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<HowItWorks />} />
          <Route path='/service' element={<Service />} />
          <Route path='/testimonials' element={<TestimonialsLink />} />
          <Route path='/why-us' element={<WhyUs />} />
          <Route path='/faq' element={<Accordion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

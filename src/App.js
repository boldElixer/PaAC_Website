import {BrowserRouter, Routes, Route} from "react-router-dom";
import Events from "./components/events";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import ScrollToTop from './components/ScrollToTop';
import "./components/navbar/navbar.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

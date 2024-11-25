import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Healthcare from "./pages/Healthcare";
import Operations from "./pages/Operations";
import Technology from "./pages/Technology";
import Rights from "./pages/Rights";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/it-operations" element={<Operations />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/ip-rights" element={<Rights />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

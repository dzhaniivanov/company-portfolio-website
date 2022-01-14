import Contact from "./components/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import "./App.scss"
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;

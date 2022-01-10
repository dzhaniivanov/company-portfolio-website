import Contact from "./components/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Intro from "./components/Intro/Intro";
import "./App.scss"
import { useState } from "react";




function App() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;

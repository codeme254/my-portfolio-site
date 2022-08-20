import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;

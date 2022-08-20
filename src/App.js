import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;

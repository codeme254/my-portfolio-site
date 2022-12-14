import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ResumeSection from "./Resume/Resume";
import ReposConnect from "./ReposConnect/ReposConnect";
import Friends from "./Friends/Friends";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="web-wrapper">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <ResumeSection />
      <ReposConnect />
      <Friends />
      <Footer />
    </div>
  );
}

export default App;

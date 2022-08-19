import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import SkillsCard from "./components/SkillsCard/SkillsCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <About />
      <SkillsCard />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

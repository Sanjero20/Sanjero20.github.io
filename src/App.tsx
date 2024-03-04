import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Line from "./components/Line";

function App() {
  return (
    <div className=" flex h-full min-h-screen flex-col bg-body font-poppins text-neutral-100">
      <Header />
      <Hero />

      <Line />
      <Skills />

      <Line />
      <Projects />
    </div>
  );
}

export default App;

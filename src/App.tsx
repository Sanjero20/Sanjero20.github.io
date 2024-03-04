import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Line from './components/Line';

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-5 bg-body font-poppins text-white">
      <Header />
      <Hero />
      <Line />
      <Skills />
    </div>
  );
}

export default App;

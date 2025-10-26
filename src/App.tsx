import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Services from './components/Services';
import Palace from './components/Palace';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black w-full max-w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Collections />
      <Services />
      <Palace />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

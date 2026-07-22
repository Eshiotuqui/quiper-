import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Locations from './components/Locations';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <Locations />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

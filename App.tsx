import Hero from './Hero';
import MouseTorch from './MouseTorch';
import Services from './Services';
import ShftrsSpotlight from './ShftrsSpotlight';
import ContactCTA from './ContactCTA';
import Footer from './Footer';
import LogoCloud from './LogoCloud';
import Navbar from './Navbar';

function App() {
  return (
    <div className="bg-deepPurple">
      <MouseTorch />
      <Navbar />
      <Hero />
      <LogoCloud />
      <Services />
      <ShftrsSpotlight />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
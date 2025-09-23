import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { WhoWeAre } from './components/sections/WhoWeAre';
import { VisionMission } from './components/sections/VisionMission';
import { About } from './components/sections/About';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Services } from './components/sections/Services';
import { Clients } from './components/sections/Clients';
import { ContactCard } from './components/sections/ContactCard';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <WhoWeAre />
      <VisionMission />
      <About />
      <WhyChooseUs />
      <Services />
      <Clients />
      <ContactCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
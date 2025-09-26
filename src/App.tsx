import { Hero } from './components/sections/Hero';
import { WhoWeAre } from './components/sections/WhoWeAre';
import { VisionMission } from './components/sections/VisionMission';
import { ContactCard } from './components/sections/ContactCard';
import { Footer } from './components/sections/Footer';
import { Chatbot } from './components/ui/Chatbot';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <VisionMission />
      <ContactCard />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
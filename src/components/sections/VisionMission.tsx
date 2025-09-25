import { VisionMissionCards } from './VisionMissionCards';
import { CEOSection } from './CEOSection';
import { CorePrinciples } from './CorePrinciples';
import { AgileApproach } from './AgileApproach';
import { OurServices } from './OurServices';
import { OurClients } from './OurClients';
import { ClientTestimonials } from './ClientTestimonials';

export const VisionMission = () => {
  return (
    <>
      <VisionMissionCards />
      <CEOSection />
      <CorePrinciples />
      <AgileApproach />
      <OurServices />
      <OurClients />
      <ClientTestimonials />
    </>
  );

};
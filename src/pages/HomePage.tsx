import { HeroSection } from '../components/sections/HeroSection';
import { ClientsSection } from '../components/sections/ClientsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { TimelineSection } from '../components/sections/TimelineSection';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SimulationsSection } from '../components/sections/SimulationsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <TimelineSection />
      <IndustriesSection />
      <ProjectsSection />
      <SimulationsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

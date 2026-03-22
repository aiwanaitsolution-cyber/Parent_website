import { ServicesPageHero } from '../components/ServicesPageHero';
import { DetailedServicesContent } from '../components/DetailedServicesContent';
import { FinalCTA } from '../components/FinalCTA';

export function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesPageHero />
      <DetailedServicesContent />
      <FinalCTA />
    </div>
  );
}

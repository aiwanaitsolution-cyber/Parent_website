import { SpaceHero } from '../components/SpaceHero';
import { WhatYouDo } from '../components/WhatYouDo';
import { ServicesSnapshot } from '../components/ServicesSnapshot';
import { FutureUpgrade } from '../components/FutureUpgrade';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <>
      <SpaceHero />
      <WhatYouDo />
      <ServicesSnapshot />
      <FutureUpgrade />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
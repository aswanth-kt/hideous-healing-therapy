import React from 'react';
import NavbarView from './views/components/Navbar/NavbarView';
import HeroSectionView from './views/components/Hero/HeroSectionView';
import AboutSectionView from './views/components/About/AboutSectionView';
import OnlineCounselingView from './views/components/OnlineCounseling/OnlineCounselingView';
import PsychologistSectionView from './views/components/Psychologist/PsychologistSectionView';
import ServicesSectionView from './views/components/Services/ServicesSectionView';
import HealingJourneySectionView from './views/components/HealingJourney/HealingJourneySectionView';
import WhyChooseUsView from './views/components/WhyChooseUs/WhyChooseUsView';
import TestimonialsView from './views/components/Testimonials/TestimonialsView';
import ContactFormView from './views/components/Contact/ContactFormView';
import CTASectionView from './views/components/CTA/CTASectionView';
import FooterView from './views/components/Footer/FooterView';
import WhatsAppButton from './views/components/WhatsApp/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-bg-light text-text-dark font-sans selection:bg-primary/30 selection:text-dark">
      {/* Navigation */}
      <NavbarView />

      {/* Main Content Layout */}
      <main className="w-full flex flex-col">
        {/* Hero animation sequence */}
        <HeroSectionView />

        {/* Philosophy & Meaning */}
        <AboutSectionView />

        {/* Online Services highlights */}
        <OnlineCounselingView />

        {/* Psychologist Credentials */}
        <PsychologistSectionView />

        {/* Focus areas */}
        <ServicesSectionView />

        {/* Timeline roadmap */}
        <HealingJourneySectionView />

        {/* Core advantages */}
        <WhyChooseUsView />

        {/* Client Restoration stories */}
        <TestimonialsView />

        {/* Pre-evaluation Form */}
        <ContactFormView />

        {/* CTA Banner */}
        <CTASectionView />
      </main>

      {/* Footer & Disclaimer */}
      <FooterView />

      {/* Floating Action Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;

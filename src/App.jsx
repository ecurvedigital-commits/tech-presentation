import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceStorySection from './components/ExperienceStorySection';
import TechnologiesSection from './components/TechnologiesSection';
import TeamSection from './components/TeamSection';
import RichExperienceTransition from './components/RichExperienceTransition';
import DevelopmentSection from './components/DevelopmentSection';
import PerformanceMarketingSection from './components/PerformanceMarketingSection';
import WhyPerformanceSection from './components/WhyPerformanceSection';
import CustomSoftwareSection from './components/CustomSoftwareSection';
import WhatCanWeBuildSection from './components/WhatCanWeBuildSection';
import EcurveApproachSection from './components/EcurveApproachSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalScope, setModalScope] = useState('');

  const handleOpenModal = (scope = 'General Inquiry') => {
    setModalScope(scope);
    setModalOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#334155] selection:bg-[#326DED] selection:text-white flex flex-col relative font-['Inter']">
      
      {/* Clean White Sticky Navbar */}
      <Navbar onOpenModal={() => handleOpenModal('Navbar Inquiry')} />

      {/* Main Presentation Journey */}
      <main className="flex-1 w-full">
        {/* HERO: Technology Built Around Your Business */}
        <Hero onExploreClick={handleExploreClick} />

        {/* SECTION 1: 14+ Years of Experience */}
        <ExperienceStorySection />

        {/* SECTION 2: Experience Across Technologies */}
        <TechnologiesSection />

        {/* SECTION 3: A Team Built Differently */}
        <TeamSection />

        {/* SECTION 4: Rich Experience. Practical Development. */}
        <RichExperienceTransition />

        {/* SECTION 5: Development That Goes Beyond Code */}
        <DevelopmentSection />

        {/* SECTION 6: Websites Built for Performance Marketing */}
        <PerformanceMarketingSection />

        {/* SECTION 7: Why Build for Performance? */}
        <WhyPerformanceSection />

        {/* SECTION 8: Customized Software */}
        <CustomSoftwareSection />

        {/* SECTION 9: Software Built Around Your Requirements */}
        <WhatCanWeBuildSection />

        {/* SECTION 10: One Technology Partner. Multiple Capabilities. */}
        <EcurveApproachSection />

        {/* FINAL SECTION: Your Business Is Unique. Your Technology Should Be Too. */}
        <FinalCTA onOpenModal={() => handleOpenModal('Final CTA')} />
      </main>

      {/* Clean Light Footer */}
      <Footer />

      {/* Modal Dialog */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialScope={modalScope}
      />
    </div>
  );
}

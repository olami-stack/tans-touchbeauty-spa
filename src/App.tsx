import { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import TrustBar from './components/TrustBar.tsx';
import Services from './components/Services.tsx';
import Gallery from './components/Gallery.tsx';
import WhyUs from './components/WhyUs.tsx';
import Testimonials from './components/Testimonials.tsx';
import Membership from './components/Membership.tsx';
import GiftCards from './components/GiftCards.tsx';
import VisitUs from './components/VisitUs.tsx';
import Footer from './components/Footer.tsx';
import MemberModal from './components/MemberModal.tsx';
import WhatsAppBubble from './components/WhatsAppBubble.tsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#120E0A] text-brown font-sans selection:bg-gold/20 selection:text-brown antialiased">
      {/* 1. STICKY HEADER */}
      <Header onOpenMemberArea={() => setIsModalOpen(true)} />

      {/* 2. HERO SECTION */}
      <Hero />

      {/* 3. TRUST BAR */}
      <TrustBar />

      {/* 4. SERVICES SECTION & HOME SERVICE BANNER */}
      <Services />

      {/* 4B. SANCTUARY GALLERY SECTION */}
      <Gallery />

      {/* 5. WHY TAN'S TOUCH SECTION */}
      <WhyUs />

      {/* 6. TESTIMONIALS / REVIEWS SECTION */}
      <Testimonials />

      {/* 6B. MEMBERSHIP SECTION */}
      <Membership />

      {/* 6C. GIFT CARDS BANNER */}
      <GiftCards />

      {/* 7. VISIT US SECTION */}
      <VisitUs />

      {/* 8. FOOTER */}
      <Footer />

      {/* 9. FLOATING WHATSAPP BUBBLE */}
      <WhatsAppBubble />

      {/* MEMBER AREA MODAL */}
      <MemberModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

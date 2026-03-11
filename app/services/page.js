export const metadata = {
  title: 'Our Services - WhatsApp Bots, Automation & Custom Software | Beelio',
  description: 'Beelio builds WhatsApp chatbots, business automation systems, web apps and mobile apps for African businesses. See exactly what we build and who it is for.',
  alternates: { canonical: 'https://beelio.tech/services' },
};

import Header from '../../components/Header';
import Solution from '../../components/Solution';
import HowItWorks from '../../components/HowItWorks';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="pt-28 pb-6 bg-[#0a1020] text-center px-4">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-3">What We Build</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
          Software that runs your business <span className="text-electric">for you</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          Three core products. Each one built around your exact workflow, not a generic template.
        </p>
      </div>
      <Solution />
      <HowItWorks />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

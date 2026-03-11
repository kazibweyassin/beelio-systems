export const metadata = {
  title: 'Our Services — WhatsApp Bots, Automation & Custom Software',
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
      <div className="pt-24 pb-4 bg-[#0a1020] text-center">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">What we build</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white">Our Services</h1>
      </div>
      <Solution />
      <HowItWorks />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

export const metadata = {
  title: 'Beelio Technologies | AI Software & FinTech Development',
  description: 'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
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
          Software that supports your business <span className="text-electric">at scale</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          Each engagement is built around your exact workflow, architecture, and delivery requirements.
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

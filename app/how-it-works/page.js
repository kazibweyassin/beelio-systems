export const metadata = {
  title: 'Beelio Technologies | AI Software & FinTech Development',
  description: 'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
  alternates: { canonical: 'https://beelio.tech/how-it-works' },
};

import Header from '../../components/Header';
import HowItWorks from '../../components/HowItWorks';
import WhyBeelio from '../../components/WhyBeelio';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export default function HowItWorksPage() {
  return (
    <main>
      <Header />
      <div className="pt-28 pb-6 bg-[#0a1020] text-center px-4">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-3">The Process</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
          From first call to <span className="text-electric">delivery with clarity</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          Clear scope, defined milestones, and a structured delivery process from start to finish.
        </p>
      </div>
      <HowItWorks />
      <WhyBeelio />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

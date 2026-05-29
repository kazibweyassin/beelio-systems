export const metadata = {
  title: 'Beelio Technologies | AI Software & FinTech Development',
  description: 'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
  alternates: { canonical: 'https://beelio.tech/pricing' },
};

import Header from '../../components/Header';
import Pricing from '../../components/Pricing';
import FAQ from '../../components/FAQ';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-28 pb-6 bg-[#0a1020] text-center px-4">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Transparent Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
          Engagement options. <span className="text-electric">Clear scope.</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          Defined project builds, retainers, and enterprise engagements for software teams that need a clear delivery model.
        </p>
      </div>
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

export const metadata = {
  title: 'Pricing - WhatsApp Bots & Software from UGX 2.5M | Beelio',
  description: 'Transparent, flat-rate pricing for WhatsApp chatbots, automation systems and custom software. Starter from UGX 2.5M. All packages include 3 months free support.',
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
          One flat fee. <span className="text-electric">No surprises.</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          Every package includes 3 months of free support after launch. No monthly fees unless you choose a retainer.
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

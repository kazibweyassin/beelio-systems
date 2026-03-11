export const metadata = {
  title: 'Pricing — WhatsApp Bots & Software from UGX 2.5M',
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
      <div className="pt-24 pb-4 bg-[#0a1020] text-center">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Transparent pricing</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white">Pricing</h1>
      </div>
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

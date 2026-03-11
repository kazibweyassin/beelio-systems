export const metadata = {
  title: 'How It Works — From Discovery to Go-Live in 2 to 4 Weeks',
  description: 'See exactly how Beelio delivers your WhatsApp bot or custom software — from the first call to launch day. Most projects are live within 2 to 4 weeks.',
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
      <div className="pt-24 pb-4 bg-[#0a1020] text-center">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">The process</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white">How It Works</h1>
      </div>
      <HowItWorks />
      <WhyBeelio />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

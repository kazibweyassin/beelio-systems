export const metadata = {
  title: 'Beelio Technologies | AI Software & FinTech Development',
  description: 'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
  alternates: { canonical: 'https://beelio.tech/industries' },
};

import Header from '../../components/Header';
import Industries from '../../components/Industries';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export default function IndustriesPage() {
  return (
    <main>
      <Header />
      <div className="pt-24 pb-4 bg-[#0a1020] text-center">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Who we build for</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white">Industries and sectors we serve</h1>
      </div>
      <Industries />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

export const metadata = {
  title: 'Industries We Serve — Clinics, Restaurants, SACCOs & More',
  description: 'Beelio builds custom software for clinics, restaurants, retail shops, schools, SACCOs, logistics companies and more across Uganda and East Africa.',
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
        <h1 className="text-3xl md:text-5xl font-bold text-white">Industries We Serve</h1>
      </div>
      <Industries />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

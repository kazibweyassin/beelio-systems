export const metadata = {
  title: 'Beelio Technologies | AI Software & FinTech Development',
  description: 'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
  alternates: { canonical: 'https://beelio.tech/contact' },
};

import Header from '../../components/Header';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-28 pb-6 bg-[#0a1020] text-center px-4">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
          Discuss your system requirements. <span className="text-electric">We respond promptly.</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          Consultation-led, no obligation. We will tell you honestly if we can help and how we would scope the work.
        </p>
      </div>
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

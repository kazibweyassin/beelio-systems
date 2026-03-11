export const metadata = {
  title: 'How It Works - From Discovery to Go-Live in 2 to 4 Weeks | Beelio',
  description: 'See exactly how Beelio delivers your WhatsApp bot or custom software. From the first call to launch day. Most projects are live within 2 to 4 weeks.',
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
          From first call to <span className="text-electric">go-live in 2 to 4 weeks</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          No long projects, no vague timelines. Here is exactly what happens after you message us.
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

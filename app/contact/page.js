export const metadata = {
  title: 'Contact Beelio — Get a Free WhatsApp Demo',
  description: 'Talk to the Beelio team about your project. Free consultation, no commitment. We reply within a few hours on WhatsApp.',
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
          Tell us your problem. <span className="text-electric">We reply within hours.</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          Free consultation, no commitment. We will tell you honestly if we can help and what it would cost.
        </p>
      </div>
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

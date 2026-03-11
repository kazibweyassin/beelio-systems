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
      <div className="pt-24 pb-4 bg-[#0a1020] text-center">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Get in touch</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white">Contact Us</h1>
      </div>
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

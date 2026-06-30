import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import Header from '../../components/Header';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export const metadata = pageMetadata({
  title: 'Contact — Software Development & Consultation',
  description:
    'Get in touch with Beelio Technologies. Book a consultation to discuss your software project, FinTech platform, or automation needs.',
  path: '/contact',
  keywords: [
    'contact software developer',
    'software development consultation',
    'book software consultation',
    'FinTech development inquiry',
    'custom software inquiry',
  ],
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ])}
      />
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
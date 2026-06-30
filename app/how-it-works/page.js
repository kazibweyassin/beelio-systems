import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import Header from '../../components/Header';
import HowItWorks from '../../components/HowItWorks';
import WhyBeelio from '../../components/WhyBeelio';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export const metadata = pageMetadata({
  title: 'How We Build Software — Development Process & Timeline',
  description:
    'Our software development process: consultation, architecture, development, and launch. 2-4 week delivery with clear scope and defined milestones.',
  path: '/how-it-works',
  keywords: [
    'software development process',
    'custom software development timeline',
    'agile software development',
    'software delivery methodology',
    'enterprise software development',
    'how software is built',
  ],
});

export default function HowItWorksPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'How It Works', href: '/how-it-works' },
        ])}
      />
      <Header />
      <div className="pt-28 pb-6 bg-[#0a1020] text-center px-4">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-3">The Process</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
          From first call to <span className="text-electric">delivery with clarity</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          Clear scope, defined milestones, and a structured delivery process from start to finish.
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
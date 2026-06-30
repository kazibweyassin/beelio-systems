import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import Header from '../../components/Header';
import Industries from '../../components/Industries';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export const metadata = pageMetadata({
  title: 'Industries We Serve — FinTech, Banking & Enterprise Software',
  description:
    'We build software for FinTech companies, banking institutions, enterprises, healthcare, logistics, and government. Sector-specific software solutions for regulated industries.',
  path: '/industries',
  keywords: [
    'FinTech software',
    'banking software solutions',
    'enterprise software development',
    'healthcare software',
    'logistics software',
    'government software solutions',
    'financial services software',
  ],
});

export default function IndustriesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
        ])}
      />
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
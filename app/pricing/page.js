import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import { faqSchema } from '@/lib/faqSchema';
import JsonLd from '@/components/JsonLd';
import Header from '../../components/Header';
import Pricing from '../../components/Pricing';
import FAQ from '../../components/FAQ';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export const metadata = pageMetadata({
  title: 'Software Development Pricing & Engagement Models',
  description:
    'Transparent pricing for custom software projects, retainers, and enterprise builds. From $2,500 starter projects to custom enterprise solutions.',
  path: '/pricing',
  keywords: [
    'software development pricing',
    'custom software cost',
    'retainer pricing',
    'enterprise software pricing',
    'software development rates',
    'project-based pricing',
    'development engagement models',
  ],
});

export default function PricingPage() {
  return (
    <main>
      <JsonLd
        data={[
          faqSchema,
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Pricing', href: '/pricing' },
          ]),
        ]}
      />
      <Header />
      <div className="pt-28 pb-6 bg-[#0a1020] text-center px-4">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Transparent Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
          Engagement options. <span className="text-electric">Clear scope.</span>
        </h1>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
          Defined project builds, retainers, and enterprise engagements for software teams that need a clear delivery model.
        </p>
      </div>
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}
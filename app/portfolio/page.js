import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Portfolio from '../../components/Portfolio';
import CTASection from '../../components/CTASection';

export const metadata = pageMetadata({
  title: 'Case Studies & Portfolio — Software Development Examples',
  description:
    'Real software systems we built: workflow automation, financial platforms, enterprise dashboards, and operational systems. See our portfolio of completed projects.',
  path: '/portfolio',
  keywords: [
    'software case studies',
    'portfolio examples',
    'custom software examples',
    'workflow automation examples',
    'financial platform examples',
    'software development portfolio',
    'completed projects',
  ],
});

export default function PortfolioPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Portfolio', href: '/portfolio' },
        ])}
      />
      <Header />

      <section className="py-24 bg-[#0a1020] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Case Studies and systems
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Real products we've built from scratch and the operational problems they solve.
        </p>
      </section>

      <Portfolio />
      <CTASection />
      <Footer />
    </main>
  );
}
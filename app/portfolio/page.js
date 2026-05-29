export const metadata = {
  title: 'Beelio Technologies | AI Software & FinTech Development',
  description: 'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
  alternates: {
    canonical: 'https://beelio.tech/portfolio',
  },
};

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Portfolio from '../../components/Portfolio';
import CTASection from '../../components/CTASection';

export default function PortfolioPage() {
  return (
    <main>
      <Header />

      {/* simple hero/banner for the portfolio page */}
      <section className="py-24 bg-[#0a1020] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Case Studies and systems
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Real products we've built from scratch and the operational problems they solve.
        </p>
      </section>

      <Portfolio />

      {/* optional invitation section to keep momentum */}
      <CTASection />

      <Footer />
    </main>
  );
}

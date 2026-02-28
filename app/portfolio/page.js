export const metadata = {
  title: 'Case Studies | Beelio Technologies',
  description: "Real products we've built from scratch and the problems they solve.",
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
          Case Studies
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Real products we've built from scratch and the problems they solve.
        </p>
      </section>

      <Portfolio />

      {/* optional invitation section to keep momentum */}
      <CTASection />

      <Footer />
    </main>
  );
}

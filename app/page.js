export const metadata = {
  title: 'Home | Beelio Technologies',
  description: 'Kampala‑based team building WhatsApp chatbots and business automation for African companies. Simple, local, no-nonsense.',
};

import Header from '../components/Header';
import Hero from '../components/Hero';
import Solution from '../components/Solution';
import Portfolio from '../components/Portfolio';
import Industries from '../components/Industries';
import Pricing from '../components/Pricing';
import Problem from '../components/Problem';
import HowItWorks from '../components/HowItWorks';
import WhyBeelio from '../components/WhyBeelio';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Solution />
      <Portfolio
        heading="Real results from real businesses"
        subheading="Mini case studies from Kampala and beyond."
      />
      <Industries />
      <Pricing />
      <Problem />
      <HowItWorks />
      <WhyBeelio />
      <FAQ />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

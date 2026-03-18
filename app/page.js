export const metadata = {
  title: 'WhatsApp Automation for Service Businesses Worldwide | Beelio',
  description: 'Beelio automates WhatsApp replies, bookings, payments, and customer follow-up for salons, clinics, and retailers in the UK, US, EU, and beyond. Reduce no-shows, boost revenue, and deliver enterprise-grade reliability.',
  alternates: {
    canonical: 'https://beelio.tech',
  },
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
        heading="Real results for global businesses"
        subheading="See how Beelio helps salons, clinics, and retailers worldwide reduce no-shows, automate bookings, and grow revenue."
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

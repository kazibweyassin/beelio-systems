export const metadata = {
  title: 'Custom Software, WhatsApp Chatbots & Business Automation in Uganda',
  description: 'Beelio Technologies builds WhatsApp chatbots, business automation, web apps and mobile apps for clinics, schools, restaurants, SACCOs and retail businesses across Uganda and East Africa.',
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
        heading="Real results from real businesses"
        subheading="Real results from real businesses."
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

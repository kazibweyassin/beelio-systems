export const metadata = {
  title: 'Beelio Technologies | AI Software, WhatsApp Automation & Custom Systems',
  description: 'Beelio Technologies builds AI software, WhatsApp automation, and custom business systems for East African businesses, including clinics, schools, SACCOs, retailers, logistics teams, and financial service providers.',
  alternates: {
    canonical: 'https://beelio.tech',
  },
};

import Header from '../components/Header';
import Hero from '../components/Hero';
import CompanySnapshot from '../components/CompanySnapshot';
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
      <CompanySnapshot />
      <Solution />
      <Portfolio
        heading="Representative systems we build"
        subheading="Examples of the kind of workflows we automate for service businesses and financial service providers."
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

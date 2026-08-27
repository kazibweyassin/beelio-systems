import { pageMetadata } from '@/lib/seo';
import { faqSchema } from '@/lib/faqSchema';
import JsonLd from '@/components/JsonLd';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CompanySnapshot from '../components/CompanySnapshot';
import Solution from '../components/Solution';
import Portfolio from '../components/Portfolio';
import Industries from '../components/Industries';
import Problem from '../components/Problem';
import HowItWorks from '../components/HowItWorks';
import WhyBeelio from '../components/WhyBeelio';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import GrowthPreview from '../components/GrowthPreview';

export const metadata = pageMetadata({
  title: 'Beelio Technologies | AI Software & FinTech Development',
  description:
    'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <Header />
      <Hero />
      <CompanySnapshot />
      <Solution />
      <Portfolio
        heading="Representative systems we build"
        subheading="Examples of the kind of workflows we design for FinTech companies, institutions, and scaling businesses."
      />
      <Industries />
      <Problem />
      <GrowthPreview />
      <HowItWorks />
      <WhyBeelio />
      <FAQ />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}
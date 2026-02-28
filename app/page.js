import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import WhyBeelio from '../components/WhyBeelio';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Portfolio
        heading="What we've built"
        subheading="Real products, built from scratch, serving real users across Africa."
      />
      <WhyBeelio />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
}

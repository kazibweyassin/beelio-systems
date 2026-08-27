import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import Header from '../../components/Header';
import Growth from '../../components/Growth';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';

export const metadata = pageMetadata({
  title: 'Client Growth System — Website + WhatsApp Intake',
  description:
    'A professional website connected to WhatsApp intake, automated FAQs, and consultation booking. Typical delivery in 7 days. Packages from UGX 1.2m.',
  path: '/growth',
  keywords: [
    'WhatsApp business website Uganda',
    'client intake system',
    'consultation booking website',
    'service business website',
    'WhatsApp FAQs',
    'Beelio Growth',
    'website packages Uganda',
  ],
});

const growthFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an existing website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We can build from the ground up or improve an existing website while keeping the parts that still serve your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do you need from me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your logo, services, contact details and available photos. We guide you through the content so the project keeps moving.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does payment work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 60% deposit starts the project. The remaining 40% is paid after approval and before the system goes live.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will automation replace my team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. It handles repetitive first questions, captures lead details and makes follow-up easier. Your team remains in control of every relationship.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a custom software build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Growth is a focused website and WhatsApp client system, typically live in about seven days. Custom platforms, FinTech products and retainers follow a longer scoped engagement.',
      },
    },
  ],
};

const growthOfferSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Beelio Client Growth System packages',
  itemListElement: [
    {
      '@type': 'Offer',
      position: 1,
      name: 'Essential',
      description: 'A five-page professional website with WhatsApp, contact forms, basic SEO, and 30 days of support.',
      price: '1200000',
      priceCurrency: 'UGX',
      availability: 'https://schema.org/InStock',
      url: 'https://beelio.tech/growth#packages',
    },
    {
      '@type': 'Offer',
      position: 2,
      name: 'Growth',
      description: 'Everything in Essential plus booking, client-intake automation, WhatsApp FAQs, and 60 days of support.',
      price: '2500000',
      priceCurrency: 'UGX',
      availability: 'https://schema.org/InStock',
      url: 'https://beelio.tech/growth#packages',
    },
  ],
};

export default function GrowthPage() {
  return (
    <main>
      <JsonLd
        data={[
          growthFaqSchema,
          growthOfferSchema,
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Growth', href: '/growth' },
          ]),
        ]}
      />
      <Header />
      <Growth />
      <Footer />
      <Chatbot />
    </main>
  );
}

// Service Schema for SEO - Service structured data
export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://beelio.tech',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://beelio.tech/services',
    },
  ],
};

export const serviceOfferingsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'AI-Powered Software & FinTech Platforms',
      description: 'Custom intelligent systems for financial services and enterprise teams. We build intelligent systems that automate decisions, analyse data, and streamline operations.',
      provider: {
        '@type': 'Organization',
        name: 'Beelio Technologies',
        url: 'https://beelio.tech',
      },
      areaServed: 'Emerging Markets',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Enterprise Business Automation',
      description: 'End-to-end workflow automation for operational teams. We build the systems that remove repetitive manual work across operations, approvals, reporting, and internal processes.',
      provider: {
        '@type': 'Organization',
        name: 'Beelio Technologies',
        url: 'https://beelio.tech',
      },
      areaServed: 'Emerging Markets',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Custom Software Development',
      description: 'Web, mobile, and API systems built around your business model. Best for teams moving from disconnected tools to a single, robust software platform designed from scratch.',
      provider: {
        '@type': 'Organization',
        name: 'Beelio Technologies',
        url: 'https://beelio.tech',
      },
      areaServed: 'Emerging Markets',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Customer Support Automation',
      description: 'Automate support routing and routine responses. Best for businesses that want faster responses, better escalation handling, and less time spent on repetitive support work.',
      provider: {
        '@type': 'Organization',
        name: 'Beelio Technologies',
        url: 'https://beelio.tech',
      },
      areaServed: 'Emerging Markets',
    },
    {
      '@type': 'Service',
      position: 5,
      name: 'Client Growth System',
      description: 'A professional website connected to WhatsApp intake, automated FAQs, and consultation booking for service businesses. Typical delivery in 7 days.',
      url: 'https://beelio.tech/growth',
      provider: {
        '@type': 'Organization',
        name: 'Beelio Technologies',
        url: 'https://beelio.tech',
      },
      areaServed: 'Uganda',
    },
  ],
};

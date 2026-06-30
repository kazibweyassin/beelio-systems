// FAQ Schema for SEO - FAQPage structured data
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this right for my type of business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your business needs financial workflows, internal automation, customer operations, or custom software, then yes. We work with FinTech companies, financial institutions, enterprises, and scaling businesses across Africa and beyond.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if it does not work for me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build every system around your specific workflow, not a generic template. Before we write a single line of code we map out exactly how your business operates. If after the demo you feel it is not the right fit, there is zero obligation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from just hiring someone to reply messages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A manual process is slow, inconsistent, and hard to scale. We design systems that handle workflows reliably, integrate with your tools, and support growth without adding avoidable operational overhead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Beelio handle customer support too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can automate FAQs, booking changes, order updates, complaint routing, and after-hours responses. For anything complex, the conversation can hand off to a human at the right time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long until I see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients go live within 1 to 2 weeks. You will see the first automated replies within days of launch. Measurable changes like faster response times typically show up in the first 30 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the catch? Why is the demo free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No catch. We start with a consultation because clarity matters before any build begins. We would rather map the requirements properly than force a vague sales conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the project launches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every project includes a defined support period after launch. Bug fixes, minor updates, and guidance are included, and we can continue on a retainer if the project needs ongoing development.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with businesses outside Uganda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can support remote projects across East Africa, and our systems are designed to work with the tools, workflows, and mobile money needs common in the region.',
      },
    },
  ],
};

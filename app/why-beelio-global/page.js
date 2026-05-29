import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Check, Shield, Users, Globe, Zap, Layers, BarChart2 } from 'lucide-react';

export const metadata = {
  title: 'Beelio Technologies | AI Software & FinTech Development',
  description: 'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
  keywords: [
    'AI software',
    'FinTech development',
    'emerging markets',
    'enterprise software',
    'AI agents',
    'financial technology Africa',
  ],
};

const features = [
  {
    icon: <Globe size={28} className="text-electric" />,
    title: 'Multi-location & Multi-user',
    desc: 'Manage all your branches and staff from one dashboard. Consistent experience, global scale.'
  },
  {
    icon: <Layers size={28} className="text-electric" />,
    title: 'White-label & Custom Branding',
    desc: 'Your brand, your flows. Offer a seamless experience to your clients with custom branding.'
  },
  {
    icon: <Zap size={28} className="text-electric" />,
    title: 'Integrations',
    desc: 'Connect Stripe, Google Calendar, HubSpot, Shopify, and more. Automate your entire workflow.'
  },
  {
    icon: <Shield size={28} className="text-electric" />,
    title: 'Enterprise Security & Compliance',
    desc: 'Audit logs, GDPR compliance, and robust infrastructure. Your data is safe and compliant.'
  },
  {
    icon: <BarChart2 size={28} className="text-electric" />,
    title: 'Advanced Reporting',
    desc: 'Real-time analytics and custom reports for actionable business insights.'
  },
  {
    icon: <Users size={28} className="text-electric" />,
    title: 'SLA & Dedicated Support',
    desc: 'Enterprise SLAs, onboarding, and a dedicated success manager for your business.'
  },
];

export default function WhyBeelioGlobal() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a1020] text-white pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Why choose Beelio <span className="text-electric">for emerging markets?</span>
          </h1>
          <p className="text-white/60 text-lg mb-12 text-center max-w-2xl mx-auto">
            Beelio is an AI software and FinTech development company focused on intelligent systems, financial infrastructure, and enterprise automation for serious businesses.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((f, i) => (
              <div key={i} className="bg-[#0d1526] rounded-2xl p-7 border border-white/10 flex gap-4 items-start">
                {f.icon}
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">{f.title}</h3>
                  <p className="text-white/60 text-base">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/contact" className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition">
              <Check size={18} /> Book a consultation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

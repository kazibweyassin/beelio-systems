import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Check, Shield, Users, Globe, Zap, Layers, BarChart2 } from 'lucide-react';

export const metadata = {
  title: 'Why Beelio for Global Businesses | WhatsApp Automation Platform',
  description: 'Discover why global salons, clinics, and retailers choose Beelio: multi-location, integrations, enterprise security, SLA support, and more.',
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
            Why choose Beelio <span className="text-electric">for global businesses?</span>
          </h1>
          <p className="text-white/60 text-lg mb-12 text-center max-w-2xl mx-auto">
            Beelio is built for ambitious salons, clinics, and retailers worldwide. Here’s why leading brands trust us to automate WhatsApp, bookings, and customer engagement at scale.
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
              <Check size={18} /> Book a free global consultation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

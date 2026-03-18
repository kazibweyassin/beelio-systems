import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Results & Case Studies | Beelio Global',
  description: 'See how Beelio helps global salons, clinics, and retailers automate WhatsApp, bookings, and customer engagement. Real results, real ROI.',
};

const results = [
  {
    industry: 'Salon Chain (UK)',
    outcome: 'Missed bookings reduced by 45% and no-shows down 60% after automating WhatsApp bookings and reminders.',
  },
  {
    industry: 'Clinic Group (US)',
    outcome: 'Admin time cut by 30%. Patient satisfaction up. 24/7 instant replies with WhatsApp automation.',
  },
  {
    industry: 'Retailer (EU)',
    outcome: 'Zero surprise stockouts. Revenue up 15%. Staff focused on sales, not counting.',
  },
  {
    industry: 'Multi-location Spa (UK)',
    outcome: 'Consistent experience across all branches. Bookings up 25%. Real-time management visibility.',
  },
];

const trustedBy = [
  'Multiple UK salons',
  'US clinic groups',
  'EU retailers',
  'Global spa brands',
];

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a1020] text-white pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Real results for global businesses
          </h1>
          <p className="text-white/60 text-lg mb-10 text-center max-w-2xl mx-auto">
            Beelio delivers measurable ROI for salons, clinics, and retailers worldwide. Here are anonymized case studies and outcomes.
          </p>
          <div className="mb-14">
            {results.map((r, i) => (
              <div key={i} className="bg-[#0d1526] rounded-2xl p-6 mb-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">{r.industry}</h3>
                <p className="text-white/70 text-base">{r.outcome}</p>
              </div>
            ))}
          </div>
          <div className="text-center mb-10">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Trusted by</p>
            <div className="flex flex-wrap justify-center gap-4">
              {trustedBy.map((t, i) => (
                <span key={i} className="bg-white/10 text-white/70 px-4 py-2 rounded-full text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

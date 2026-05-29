import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Beelio Technologies | AI Software & FinTech Development',
  description: 'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
};

const results = [
  {
    industry: 'Operations workflow transformation',
    outcome: 'Manual steps reduced, reporting accelerated, and delivery visibility improved across the team.',
  },
  {
    industry: 'Financial systems improvement',
    outcome: 'System controls improved, handoffs became more predictable, and operational errors dropped.',
  },
  {
    industry: 'Enterprise workflow transformation',
    outcome: 'Leadership gained better visibility across operations, approvals, and reporting.',
  },
  {
    industry: '[FinTech client case study — coming soon]',
    outcome: 'Placeholder for a published FinTech implementation with measurable business outcomes.',
  },
];

const trustedBy = [
  'FinTech teams',
  'Enterprise operators',
  'Financial institutions',
  'Scaling businesses',
];

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a1020] text-white pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Results for complex software projects
          </h1>
          <p className="text-white/60 text-lg mb-10 text-center max-w-2xl mx-auto">
            Beelio delivers measurable operational improvements for financial, enterprise, and scaling businesses. Here are anonymized outcomes and a placeholder for a live FinTech case study.
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

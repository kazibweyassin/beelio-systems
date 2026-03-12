import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog – WhatsApp Automation & Software Tips for Uganda | Beelio',
  description:
    'Practical guides on automating your business with WhatsApp bots, custom software, and inventory systems in Uganda. Real examples, real prices.',
  openGraph: {
    title: 'Blog – WhatsApp Automation & Software Tips for Uganda | Beelio',
    description:
      'Practical guides on automating your business with WhatsApp bots, custom software, and inventory systems in Uganda.',
    url: 'https://beelio.tech/blog',
    siteName: 'Beelio Technologies',
    type: 'website',
  },
};

const categoryColors = {
  'WhatsApp Automation': 'bg-green-900/40 text-green-300 border border-green-700/40',
  Healthcare: 'bg-blue-900/40 text-blue-300 border border-blue-700/40',
  'Custom Software': 'bg-purple-900/40 text-purple-300 border border-purple-700/40',
  'Business Automation': 'bg-orange-900/40 text-orange-300 border border-orange-700/40',
  Restaurants: 'bg-red-900/40 text-red-300 border border-red-700/40',
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a1020] text-white pt-24 pb-24">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 mb-16 text-center">
          <p className="text-white/40 font-semibold text-sm uppercase tracking-widest mb-3">
            Beelio Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Automation guides for <span className="text-white/80">Ugandan businesses</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Practical articles on WhatsApp bots, custom software, and business systems. Written for owners, not engineers.
          </p>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-[#0d1526] border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 mb-10"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    categoryColors[featured.category] ?? 'bg-white/10 text-white/60'
                  }`}
                >
                  {featured.category}
                </span>
                <span className="text-white/40 text-sm flex items-center gap-1">
                  <Clock size={13} /> {featured.readTime}
                </span>
                <span className="text-white/30 text-sm">{formatDate(featured.date)}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white/80 transition-colors mb-3">
                {featured.title}
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-5 max-w-3xl">
                {featured.description}
              </p>
              <span className="inline-flex items-center gap-2 text-white/40 font-medium text-sm group-hover:text-white/70 group-hover:gap-3 transition-all">
                Read article <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-[#0d1526] border border-white/8 rounded-2xl p-7 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      categoryColors[post.category] ?? 'bg-white/10 text-white/60'
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-white/40 text-xs flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-electric transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-2 text-white/40 text-sm font-medium group-hover:text-white/70 group-hover:gap-3 transition-all">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, MessageCircle } from 'lucide-react';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Beelio Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://beelio.tech/blog/${post.slug}`,
      siteName: 'Beelio Technologies',
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function RenderBlock({ block }) {
  switch (block.type) {
    case 'p':
      return <p className="text-white/75 text-base md:text-[17px] leading-relaxed mb-5">{block.text}</p>;
    case 'h2':
      return (
        <h2 className="text-xl md:text-2xl font-bold text-white mt-10 mb-4 leading-snug">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="text-lg font-semibold text-white mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'list':
      return (
        <ul className="mb-6 space-y-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-white/70 text-[15px] leading-relaxed">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'cta':
      return (
        <div className="my-10 flex justify-center">
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white/80 font-medium px-6 py-3 rounded-xl hover:border-white/30 hover:text-white transition"
          >
            <MessageCircle size={18} />
            {block.text}
          </a>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a1020] text-white pt-24 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-electric transition-colors text-sm mb-10"
          >
            <ArrowLeft size={15} /> Back to blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/8 text-white/50 border border-white/10">
              {post.category}
            </span>
            <span className="text-white/40 text-sm flex items-center gap-1">
              <Clock size={13} /> {post.readTime}
            </span>
            <span className="text-white/30 text-sm">{formatDate(post.date)}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-white/50 text-lg leading-relaxed mb-10 border-b border-white/10 pb-10">
            {post.description}
          </p>

          {/* Content */}
          <article>
            {post.content.map((block, i) => (
              <RenderBlock key={i} block={block} />
            ))}
          </article>

          {/* Bottom CTA */}
          <div className="mt-16 bg-[#0d1526] border border-white/8 rounded-2xl p-8 text-center">
            <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-3">
              Ready to automate?
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Talk to Beelio today
            </h3>
            <p className="text-white/55 mb-6 max-w-md mx-auto">
              Free 15-minute consultation. We map your workflow and tell you exactly what we would build and what it would cost.
            </p>
            <a
              href="https://wa.me/256786367460"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white/80 font-medium px-6 py-3 rounded-xl hover:border-white/30 hover:text-white transition"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

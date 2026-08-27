import { pageMetadata } from '@/lib/seo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = pageMetadata({
  title: 'Site Map',
  description: 'Outline of pages available on the Beelio website.',
  path: '/sitemap',
  noIndex: true,
});

const pages = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Growth', href: '/growth' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Industries', href: '/industries' },
  { label: 'Results', href: '/results' },
  { label: 'Why Beelio', href: '/why-beelio-global' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteMapPage() {
  return (
    <main>
      <Header />
      <section className="py-24 bg-[#0a1020] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Site Map</h1>
        <ul className="mt-8 space-y-4 text-lg">
          {pages.map((page) => (
            <li key={page.href}>
              <a href={page.href} className="hover:underline text-electric">
                {page.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
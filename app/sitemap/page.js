import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Site Map | Beelio Technologies',
  description: 'Outline of pages available on the Beelio website.',
};

export default function SiteMapPage() {
  return (
    <main>
      <Header />
      <section className="py-24 bg-[#0a1020] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Site Map</h1>
        <ul className="mt-8 space-y-4 text-lg">
          <li><a href="/" className="hover:underline text-electric">Home</a></li>
          <li><a href="/portfolio" className="hover:underline text-electric">Portfolio</a></li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}

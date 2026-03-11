/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      // Old site pages → new equivalent pages (301 = permanent)
      { source: '/about',                    destination: '/services',     permanent: true },
      { source: '/products',                 destination: '/services',     permanent: true },
      { source: '/blog',                     destination: '/',             permanent: true },
      { source: '/blog/:slug*',              destination: '/',             permanent: true },
      { source: '/services/cybersecurity',   destination: '/services',     permanent: true },
      { source: '/services/managed-it',      destination: '/services',     permanent: true },
      { source: '/services/it-consultancy',  destination: '/services',     permanent: true },
      { source: '/services/cloud',           destination: '/services',     permanent: true },
      // www → non-www (canonical)
      { source: '/:path*', has: [{ type: 'host', value: 'www.beelio.tech' }], destination: 'https://beelio.tech/:path*', permanent: true },
    ];
  },
};

module.exports = nextConfig;

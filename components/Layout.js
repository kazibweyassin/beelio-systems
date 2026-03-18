import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/dashboard" className="text-xl font-bold text-blue-600">
                  Beelio
                </Link>
              </div>
              
              <div className="flex items-center space-x-8">
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                  Dashboard
                </Link>
                <Link href="/dashboard/bookings" className="text-gray-700 hover:text-blue-600">
                  Bookings
                </Link>
                <Link href="/dashboard/conversations" className="text-gray-700 hover:text-blue-600">
                  Conversations
                </Link>
                <Link href="/dashboard/settings" className="text-gray-700 hover:text-blue-600">
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main>
          {children}
        </main>
      </div>
    </>
  );
}

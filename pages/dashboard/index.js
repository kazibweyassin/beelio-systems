import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function Dashboard() {
  const [stats, setStats] = useState({
    todayBookings: 0,
    todayRevenue: 0,
    activeConversations: 0,
    pendingBookings: 0
  });
  const [conversations, setConversations] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, conversationsRes, bookingsRes] = await Promise.all([
        fetch('/api/dashboard/overview'),
        fetch('/api/dashboard/conversations'),
        fetch('/api/dashboard/bookings')
      ]);

      const [statsData, conversationsData, bookingsData] = await Promise.all([
        statsRes.json(),
        conversationsRes.json(),
        bookingsRes.json()
      ]);

      setStats(statsData);
      setConversations(conversationsData);
      setBookings(bookingsData);
    } catch (error) {
      console.error('Dashboard data fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId, status) => {
    try {
      const response = await fetch(`/api/dashboard/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        fetchDashboardData();
      }
    } catch (error) {
      console.error('Update booking error:', error);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg">Loading dashboard...</div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>Dashboard - Beelio</title>
      </Head>
      
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Salon Dashboard</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Today's Bookings"
              value={stats.todayBookings}
              icon="📅"
              color="blue"
            />
            <StatCard
              title="Today's Revenue"
              value={`£${stats.todayRevenue}`}
              icon="💰"
              color="green"
            />
            <StatCard
              title="Active Conversations"
              value={stats.activeConversations}
              icon="💬"
              color="purple"
            />
            <StatCard
              title="Pending Bookings"
              value={stats.pendingBookings}
              icon="⏳"
              color="orange"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Conversations */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Conversations</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {conversations.slice(0, 10).map((conv) => (
                  <ConversationItem key={conv._id} conversation={conv} />
                ))}
              </div>
            </div>

            {/* Today's Bookings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Today's Bookings</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {bookings
                  .filter(booking => {
                    const bookingDate = new Date(booking.date);
                    const today = new Date();
                    return bookingDate.toDateString() === today.toDateString();
                  })
                  .map((booking) => (
                    <BookingItem
                      key={booking._id}
                      booking={booking}
                      onUpdateStatus={updateBookingStatus}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

function StatCard({ title, value, icon, color }) {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`${colorClasses[color]} rounded-full p-3 text-white text-2xl mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function ConversationItem({ conversation }) {
  const lastMessage = conversation.messages[conversation.messages.length - 1];
  const timeAgo = new Date(conversation.lastActivity).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="border rounded-lg p-3 hover:bg-gray-50">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-medium">{conversation.customerName}</p>
          <p className="text-sm text-gray-600">{conversation.customerPhone}</p>
        </div>
        <span className="text-xs text-gray-500">{timeAgo}</span>
      </div>
      <p className="text-sm text-gray-800 truncate">
        {lastMessage?.content}
      </p>
      <div className="mt-2">
        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
          conversation.status === 'booked' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          {conversation.status}
        </span>
      </div>
    </div>
  );
}

function BookingItem({ booking, onUpdateStatus }) {
  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800',
    completed: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="border rounded-lg p-3">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-medium">{booking.customerName}</p>
          <p className="text-sm text-gray-600">{booking.service}</p>
        </div>
        <span className={`inline-block px-2 py-1 text-xs rounded-full ${statusColors[booking.status]}`}>
          {booking.status}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span>{booking.time}</span>
          <span className="mx-2">•</span>
          <span>£{booking.price}</span>
        </div>
        <div className="flex gap-2">
          {booking.status === 'pending' && (
            <>
              <button
                onClick={() => onUpdateStatus(booking._id, 'confirmed')}
                className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              >
                Confirm
              </button>
              <button
                onClick={() => onUpdateStatus(booking._id, 'cancelled')}
                className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </>
          )}
          {booking.status === 'confirmed' && (
            <button
              onClick={() => onUpdateStatus(booking._id, 'completed')}
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

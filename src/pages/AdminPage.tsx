import React, { useState, useEffect } from 'react';
import { Lock, BarChart, User } from 'lucide-react';

const AdminPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stats, setStats] = useState({ visits: 0, lastVisit: '' });

  useEffect(() => {
    // Check local session
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    // Mock Stats - In a real app this would fetch from a database
    // For now we read from localStorage to simulate "visits" 
    // (Note: This only counts visits from THIS browser in reality without a backend)
    const storedVisits = localStorage.getItem('site_visits') || '0';
    setStats({
      visits: parseInt(storedVisits, 10),
      lastVisit: new Date().toLocaleString()
    });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded password for client-side demo
    if (password === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      alert('Password errata!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Accesso Amministratore</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Inserisci password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
            >
              Entra
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">Hint: admin123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BarChart className="text-primary" />
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:text-red-700 font-medium"
        >
          Esci
        </button>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Stat Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Visite Totali</h3>
              <User className="text-blue-500 w-5 h-5" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.visits}</p>
            <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
              +12% <span className="text-gray-400">dal mese scorso</span>
            </p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Ultimo Aggiornamento</h3>
              <BarChart className="text-purple-500 w-5 h-5" />
            </div>
            <p className="text-lg font-bold text-gray-900">{stats.lastVisit}</p>
          </div>
        </div>

        {/* Google Analytics Info */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Nota Importante sulle Statistiche</h3>
          <p className="text-blue-800 mb-4">
            Poiché questo è un sito statico senza database, il contatore qui sopra è solo dimostrativo (conta solo le tue visite locali).
            <br /><br />
            Per vedere le <strong>vere visite globali</strong> di tutti gli utenti, devi accedere alla tua dashboard di <strong>Google Analytics</strong>.
          </p>
          <a 
            href="https://analytics.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Vai a Google Analytics
          </a>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LetterCard from './components/LetterCard';
import TextAnalyzer from './components/TextAnalyzer';
import AdBanner from './components/AdBanner';
import SEOContent from './components/SEOContent';
import AdminPage from './pages/AdminPage';
import { alphabet } from './data/alphabet';

// Wrapper component to handle route changes (like analytics)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simple mock counter for local storage demo
    const current = localStorage.getItem('site_visits') || '0';
    localStorage.setItem('site_visits', (parseInt(current) + 1).toString());
  }, [pathname]);

  return null;
};

const HomePage = () => (
  <div className="flex flex-col lg:flex-row gap-8">
    
    {/* Main Content Area */}
    <div className="flex-1">
      {/* Introduction / Hero */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading text-primary">
            Impara l'Alfabeto Arabo
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Benvenuto nella nostra guida interattiva. Esplora le 28 lettere dell'alfabeto arabo, 
            impara la loro grafia e clicca per ascoltare la pronuncia corretta con trascrizione fonetica.
          </p>
      </section>

      {/* Alphabet Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6" aria-label="Griglia delle lettere arabe">
        {alphabet.map((letter) => (
           <LetterCard key={letter.id} letter={letter} />
        ))}
      </section>

      {/* SEO Content Section */}
      <SEOContent />

      {/* Text Analyzer Tool */}
      <TextAnalyzer />
    </div>

    {/* Sidebar */}
    <aside className="w-full lg:w-[300px] flex flex-col gap-8 order-first lg:order-last">
       <div className="sticky top-24 space-y-8">
           {/* AdSense Sidebar Banner 300x250 */}
          <div className="w-full max-w-[300px] h-[250px] mx-auto lg:mx-0 bg-white rounded-lg overflow-hidden shadow-sm">
             <AdBanner slot="sidebar-slot-id" className="w-full h-full" />
          </div>
          
          {/* Educational Fact Box */}
          <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Lo Sapevi?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                  L'arabo si scrive da destra a sinistra. Le lettere cambiano forma a seconda della loro posizione nella parola (iniziale, mediana, finale o isolata).
              </p>
          </div>

          {/* Second Ad Slot for long pages */}
           <div className="w-full max-w-[300px] h-[250px] mx-auto lg:mx-0 bg-white rounded-lg overflow-hidden shadow-sm hidden lg:block">
             <AdBanner slot="sidebar-slot-2-id" className="w-full h-full" />
          </div>
       </div>
    </aside>

  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

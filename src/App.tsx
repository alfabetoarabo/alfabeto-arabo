import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LetterCard from './components/LetterCard';
import TextAnalyzer from './components/TextAnalyzer';
import SEOContent from './components/SEOContent';
import { alphabet } from './data/alphabet';

// Wrapper component to handle route changes (like analytics)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => (
  <div className="flex flex-col gap-12 max-w-7xl mx-auto">
    
    {/* Introduction / Hero - Centered */}
    <section className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-heading text-primary leading-tight">
          Impara l'Alfabeto Arabo
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Benvenuto nella nostra guida interattiva. Esplora le 28 lettere dell'alfabeto arabo, 
          impara la loro grafia e clicca per ascoltare la pronuncia corretta con trascrizione fonetica.
        </p>
    </section>

    <div className="flex flex-col lg:flex-row gap-12 justify-center">
      {/* Main Content Area */}
      <div className="flex-1 max-w-5xl mx-auto w-full">
        
        {/* Alphabet Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center" aria-label="Griglia delle lettere arabe">
          {alphabet.map((letter) => (
             <LetterCard key={letter.id} letter={letter} />
          ))}
        </section>

        {/* SEO Content Section */}
        <div className="mt-16">
          <SEOContent />
        </div>

        {/* Text Analyzer Tool */}
        <div className="mt-16">
          <TextAnalyzer />
        </div>
      </div>

      {/* Sidebar - Right aligned on large screens, centered on small */}
      <aside className="w-full lg:w-[320px] flex flex-col gap-8 shrink-0 items-center lg:items-start">
         <div className="sticky top-24 space-y-8 w-full max-w-[320px]">
            
            {/* Educational Fact Box */}
            <div className="bg-white p-8 rounded-2xl border-l-8 border-secondary shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Lo Sapevi?</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                    L'arabo si scrive <strong>da destra a sinistra</strong>. Per questo motivo, le lettere cambiano forma fluendo in quella direzione!
                </p>
            </div>

         </div>
      </aside>
    </div>

  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import AdBanner from './AdBanner';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        {/* AdSense Footer Banner 970x90 */}
        <div className="w-full max-w-[970px] h-[90px] hidden md:block bg-white/10 rounded-lg overflow-hidden">
          <AdBanner slot="footer-slot-id" className="w-full h-full bg-transparent text-white/50 border-white/10" />
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-heading text-secondary">Alfabeto Arabo</h2>
          <p className="text-blue-200 max-w-md mx-auto">
            Una risorsa educativa gratuita per imparare le basi della lingua araba.
          </p>
        </div>
        
        <div className="w-full border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Arabic Alphabet Learning. Tutti i diritti riservati.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="mailto:alfabetoarabo@gmail.com" className="hover:text-white transition-colors">Contatti</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

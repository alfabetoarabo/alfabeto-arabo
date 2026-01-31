import React from 'react';
import AdBanner from './AdBanner';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center gap-4">
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Alfabeto Arabo
              <span className="block text-lg md:text-xl text-secondary-dark mt-1 font-arabic">الأبجدية العربية</span>
            </h1>
        </div>
        
        {/* AdSense Header Banner 728x90 */}
        <div className="w-full max-w-[728px] h-[90px] hidden md:block">
           <AdBanner slot="header-slot-id" className="w-full h-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Moon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/30 backdrop-blur-md shadow-sm border-b border-secondary/30 sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-4 py-2 flex flex-col items-center gap-2">
        <div className="flex flex-col items-center">
            {/* Decorative Icon or Bismillah could go here */}
            <div className="text-secondary">
               <Moon className="w-6 h-6 fill-current" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight leading-none">
              Alfabeto Arabo
            </h1>
            <span className="text-xl md:text-2xl text-secondary-dark font-arabic drop-shadow-sm leading-none">
              الأبجدية العربية
            </span>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-brand-dark text-white sticky top-0 z-50 shadow-lg border-b border-brand-yellow/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <img className="h-14 w-auto object-contain bg-white/10 rounded-lg p-1" src="https://manaratacademy.com/wp-content/uploads/2022/03/لوكو-منارات-2.png" alt="شعار منارات" />
            </a>
          </div>

          <nav className="hidden xl:flex items-center space-x-1 space-x-reverse">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                {link.subItems ? (
                  <>
                    <button className="text-gray-100 hover:text-brand-yellow px-4 py-2 text-base font-medium transition-all duration-300 flex items-center rounded-md group">
                      {link.label}
                      <svg className="w-4 h-4 mr-1 text-gray-400 group-hover:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-56 rounded-xl shadow-2xl bg-brand-dark border border-brand-yellow/20 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                      <div className="py-2">
                        {link.subItems.map(sub => (
                          <a key={sub.label} href={sub.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-brand-yellow hover:text-brand-dark transition-colors">
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a href={link.href} className="text-gray-100 hover:text-brand-yellow px-4 py-2 text-base font-medium transition-all duration-300 rounded-md">
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <a href="#/courses" className="bg-brand-yellow text-brand-dark font-bold py-2 px-5 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 mr-4">
              كورساتي
            </a>
          </nav>

          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-gray-100 hover:bg-brand-yellow hover:text-brand-dark">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden bg-brand-dark border-t border-brand-yellow/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map(link => (
              <div key={link.label}>
                <a href={link.href || '#'} className="block px-3 py-2 text-base font-medium text-gray-100 hover:bg-brand-yellow hover:text-brand-dark rounded-md">
                  {link.label}
                </a>
              </div>
            ))}
            <a href="#/courses" className="block w-full text-center bg-brand-yellow text-brand-dark font-bold py-2 mt-4 rounded-md">
              كورساتي
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Waves as Wave, Globe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Wave className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-blue-900">Ondas de Esperança</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">{t('nav.home')}</Link>
            <Link to="/mission" className="text-gray-700 hover:text-blue-600 transition">{t('nav.mission')}</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition">{t('nav.projects')}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">{t('nav.contact')}</Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
            >
              <Globe className="h-5 w-5" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-xl transform transition-transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-700 hover:text-blue-600 transition"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition py-2"
              onClick={closeMenu}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/mission"
              className="text-gray-700 hover:text-blue-600 transition py-2"
              onClick={closeMenu}
            >
              {t('nav.mission')}
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-blue-600 transition py-2"
              onClick={closeMenu}
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition py-2"
              onClick={closeMenu}
            >
              {t('nav.contact')}
            </Link>
            <button
              onClick={() => {
                toggleLanguage();
                closeMenu();
              }}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition py-2"
            >
              <Globe className="h-5 w-5" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
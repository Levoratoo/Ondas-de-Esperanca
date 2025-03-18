import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Ondas de Esperança
              </h1>
              <p className="text-2xl text-white mb-8">
                {t('hero.slogan')}
              </p>
              <a
                href="https://mpago.la/2srv4fS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition group"
              >
                <div className="w-6 h-6 relative">
                  <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: 'url("/assets/blue-logo.png")',
                      filter: 'brightness(0) invert(1)'
                    }}
                  />
                </div>
                <span>{t('hero.donate')}</span>
                <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
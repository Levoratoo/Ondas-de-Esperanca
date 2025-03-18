import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, X, ExternalLink } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
              <button
                onClick={openModal}
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition group"
              >
                <Heart className="h-6 w-6" />
                <span>{t('hero.donate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-xl max-w-lg w-full animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative p-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="text-center mb-6">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('hero.donationTitle')}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t('hero.donationText')}
                </p>
                <a
                  href="https://checkout.nubank.com.br/swu0MVhspP5nw7ha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition group w-full sm:w-auto"
                >
                  <span>{t('hero.donateHere')}</span>
                  <ExternalLink className="h-5 w-5 opacity-70 group-hover:opacity-100 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
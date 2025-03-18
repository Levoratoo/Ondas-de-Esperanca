import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            {t('contact.title')}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>{t('contact.send')}</span>
            </button>
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">{t('contact.follow')}</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Facebook className="h-8 w-8" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium transition"
            >
              {t('contact.support')} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
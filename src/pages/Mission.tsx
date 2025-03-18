import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trash2, BookOpen, Shield } from 'lucide-react';

const Mission = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          {t('mission.title')}
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('mission.story')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Ocean cleanup" 
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Trash2 className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('mission.oceanCleanup.title')}
                </h3>
              </div>
              <p className="text-gray-600">
                {t('mission.oceanCleanup.description')}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Education" 
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('mission.education.title')}
                </h3>
              </div>
              <p className="text-gray-600">
                {t('mission.education.description')}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Conservation" 
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('mission.conservation.title')}
                </h3>
              </div>
              <p className="text-gray-600">
                {t('mission.conservation.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
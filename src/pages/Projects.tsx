import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type Project = 'cleanup' | 'guardians' | 'workshop';

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  const projects: Project[] = ['cleanup', 'guardians', 'workshop'];

  const getImageUrl = (url: string, width: number) => {
    return url.replace(/w=\d+/, `w=${width}`);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {t('projects.title')}
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-8"
          >
            <SwiperSlide>
              <div 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject('cleanup')}
              >
                <img
                  src="https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Beach Cleanup"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('projects.cleanup.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('projects.cleanup.desc')}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject('guardians')}
              >
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Ocean Guardians"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('projects.guardians.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('projects.guardians.desc')}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject('workshop')}
              >
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Sustainable Crafts"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('projects.workshop.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('projects.workshop.desc')}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition">
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition">
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={getImageUrl(
                  selectedProject === 'cleanup'
                    ? "https://images.unsplash.com/photo-1520116468816-95b69f847357"
                    : selectedProject === 'guardians'
                    ? "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
                    : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                  1200
                )}
                alt={t(`projects.${selectedProject}.title`)}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition"
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t(`projects.${selectedProject}.title`)}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t(`projects.${selectedProject}.details`)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Science Lab Session',
      category: 'labs',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Scholarship Award Ceremony',
      category: 'events',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/159844/book-read-literature-pages-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Library',
      category: 'facilities',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Computer Lab',
      category: 'labs',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Annual Function',
      category: 'events',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Group Discussion',
      category: 'classes',
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chemistry Experiment',
      category: 'labs',
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Physics Lecture',
      category: 'classes',
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/7129701/pexels-photo-7129701.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Math Class',
      category: 'classes',
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Coding Workshop',
      category: 'workshops',
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Group Project',
      category: 'classes',
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'College Building',
      category: 'facilities',
    },
    {
      id: 13,
      src: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Sports Event',
      category: 'events',
    },
    {
      id: 14,
      src: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Computer Class',
      category: 'classes',
    },
    {
      id: 15,
      src: 'https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Programming Workshop',
      category: 'workshops',
    },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classes', name: 'Classrooms' },
    { id: 'labs', name: 'Laboratories' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'workshops', name: 'Workshops' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a visual tour of our campus, facilities, and activities.
          </p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  filter === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openModal(image)}
              >
                <div className="h-64 relative">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                    <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90" onClick={closeModal}>
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-center text-white mt-4">
              <p className="text-xl">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Gallery (placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Video Gallery</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Watch videos from our college events, lectures, and campus activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Placeholder 1 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Video content will be available soon</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold mb-1">Annual Day Celebration</h3>
                <p className="text-sm text-gray-500">Recorded on: 15th March, 2024</p>
              </div>
            </div>
            
            {/* Video Placeholder 2 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Video content will be available soon</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold mb-1">Science Exhibition</h3>
                <p className="text-sm text-gray-500">Recorded on: 5th February, 2024</p>
              </div>
            </div>
            
            {/* Video Placeholder 3 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Video content will be available soon</p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold mb-1">Campus Tour</h3>
                <p className="text-sm text-gray-500">Recorded on: 10th January, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
import React from 'react';
import { Beaker, Book, LampDesk as Desktop, Home, Coffee, Bus, Wifi, Microscope } from 'lucide-react';

const FacilitiesPage: React.FC = () => {
  const facilities = [
    {
      icon: <Beaker size={40} className="mb-4 text-primary" />,
      title: 'Science Lab',
      description: 'Fully equipped labs for Physics, Chemistry and Biology with modern apparatus and safety measures.',
      images: [
        'https://images.pexels.com/photos/256521/pexels-photo-256521.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    },
    {
      icon: <Desktop size={40} className="mb-4 text-primary" />,
      title: 'Computer Lab',
      description: 'Modern computer lab with high-speed internet access for digital learning and computer courses.',
      images: [
        'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    },
    {
      icon: <Book size={40} className="mb-4 text-primary" />,
      title: 'Library',
      description: 'Well-stocked library with textbooks, reference materials, journals, and digital resources.',
      images: [
        'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    },
    {
      icon: <Microscope size={40} className="mb-4 text-primary" />,
      title: 'Smart Classrooms',
      description: 'Modern classrooms equipped with digital teaching aids, projectors, and comfortable seating.',
      images: [
        'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    },
    {
      icon: <Home size={40} className="mb-4 text-primary" />,
      title: 'Hostel',
      description: 'Separate hostel facilities for boys and girls with modern amenities and 24/7 security.',
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    },
    {
      icon: <Coffee size={40} className="mb-4 text-primary" />,
      title: 'Cafeteria',
      description: 'Clean and hygienic cafeteria serving nutritious meals and snacks at affordable prices.',
      images: [
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    },
    {
      icon: <Bus size={40} className="mb-4 text-primary" />,
      title: 'Transportation',
      description: 'College bus service covering major routes for convenient commuting of students and staff.',
      images: [
        'https://images.pexels.com/photos/15777901/pexels-photo-15777901/free-photo-of-school-bus-on-road.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    },
    {
      icon: <Wifi size={40} className="mb-4 text-primary" />,
      title: 'Wi-Fi Campus',
      description: 'High-speed Wi-Fi connectivity throughout the campus for seamless digital learning experience.',
      images: [
        'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-accent py-20 relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Facilities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the modern infrastructure and resources we offer to enhance your learning experience.
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">World-Class Facilities</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              At Lord Buddha College & Success Institute, we provide state-of-the-art facilities to ensure 
              a conducive learning environment for our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.slice(0, 4).map((facility, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Facilities Sections */}
      {facilities.map((facility, index) => (
        <section key={index} className={`py-16 ${index % 2 !== 0 ? 'bg-gray-50' : ''}`}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="mr-4">{facility.icon}</div>
                  <h2 className="text-3xl font-bold text-primary">{facility.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{facility.description}</p>
                
                {/* Additional details specific to each facility */}
                {facility.title === 'Science Lab' && (
                  <div className="space-y-3">
                    <p className="text-gray-600">Our science labs are equipped with:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Modern apparatus for Physics, Chemistry, and Biology experiments</li>
                      <li>Safety equipment and protocols</li>
                      <li>Demonstration area for teachers</li>
                      <li>Interactive learning tools</li>
                    </ul>
                  </div>
                )}
                
                {facility.title === 'Computer Lab' && (
                  <div className="space-y-3">
                    <p className="text-gray-600">Features of our computer lab:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Latest desktop computers with necessary software</li>
                      <li>High-speed internet connectivity</li>
                      <li>Projector and digital teaching aids</li>
                      <li>Technical support staff</li>
                    </ul>
                  </div>
                )}
                
                {facility.title === 'Library' && (
                  <div className="space-y-3">
                    <p className="text-gray-600">Our library resources include:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Extensive collection of textbooks and reference materials</li>
                      <li>Digital resources and e-library</li>
                      <li>Quiet study areas</li>
                      <li>Periodicals and journals</li>
                    </ul>
                  </div>
                )}
                
                {facility.title === 'Smart Classrooms' && (
                  <div className="space-y-3">
                    <p className="text-gray-600">Our classrooms feature:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Digital projectors and interactive whiteboards</li>
                      <li>Comfortable seating arrangements</li>
                      <li>Good acoustics and lighting</li>
                      <li>Climate control for year-round comfort</li>
                    </ul>
                  </div>
                )}
                
                {facility.title === 'Hostel' && (
                  <div className="space-y-3">
                    <p className="text-gray-600">Our hostel facilities provide:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Separate blocks for boys and girls</li>
                      <li>Well-furnished rooms with attached bathrooms</li>
                      <li>24/7 security and wardens</li>
                      <li>Study rooms and recreation areas</li>
                    </ul>
                  </div>
                )}
                
                {facility.title === 'Cafeteria' && (
                  <div className="space-y-3">
                    <p className="text-gray-600">Our cafeteria offers:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Hygienic and nutritious meals</li>
                      <li>Variety of menu options</li>
                      <li>Affordable pricing for students</li>
                      <li>Clean and comfortable dining area</li>
                    </ul>
                  </div>
                )}
                
                {facility.title === 'Transportation' && (
                  <div className="space-y-3">
                    <p className="text-gray-600">Our transportation service includes:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Fleet of well-maintained buses</li>
                      <li>Routes covering major residential areas</li>
                      <li>Experienced drivers and conductors</li>
                      <li>GPS tracking for safety</li>
                    </ul>
                  </div>
                )}
                
                {facility.title === 'Wi-Fi Campus' && (
                  <div className="space-y-3">
                    <p className="text-gray-600">Our Wi-Fi infrastructure provides:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>High-speed internet throughout the campus</li>
                      <li>Secure access for students and faculty</li>
                      <li>Support for digital learning initiatives</li>
                      <li>Technical support for connectivity issues</li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className={`grid grid-cols-2 gap-4 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                {facility.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="rounded-lg overflow-hidden shadow-md h-64">
                    <img
                      src={image}
                      alt={`${facility.title} - image ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our Campus</h2>
            <p className="text-xl mb-8">
              Would you like to see our facilities in person? Schedule a campus tour today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Schedule a Tour
              </a>
              <a href="/gallery" className="btn border border-white hover:bg-white hover:text-primary">
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
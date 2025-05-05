import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface SlideContent {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSlider: React.FC = () => {
  const slides: SlideContent[] = [
    {
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Welcome to Lord Buddha College',
      subtitle: 'Your Gateway to Excellence in Education',
      buttonText: 'Explore Programs',
      buttonLink: '/courses',
    },
    {
      image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Bridge Course Programs',
      subtitle: 'Prepare for A-Level, +2 Science & Management',
      buttonText: 'View Courses',
      buttonLink: '/courses',
    },
    {
      image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Scholarship Test on 4th Baisakh',
      subtitle: 'Secure your future with our scholarship opportunities',
      buttonText: 'Apply Now',
      buttonLink: '/admission',
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-[500px] lg:h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="container relative z-10 text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl mb-8">{slide.subtitle}</p>
                  <Link to={slide.buttonLink} className="btn btn-primary">
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
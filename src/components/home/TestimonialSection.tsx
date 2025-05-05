import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  content: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Engineering Student',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1',
      content: 'The bridge course at Lord Buddha College prepared me exceptionally well for my engineering entrance exams. The faculty members are knowledgeable and supportive, and the practical lab sessions were invaluable.',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Medical Student',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1',
      content: 'I couldn\'t have cleared my pharmacy entrance exam without the guidance from Success Institute. The study materials were comprehensive, and the mock tests helped me gauge my preparation level effectively.',
    },
    {
      id: 3,
      name: 'Anish Thapa',
      position: 'A-Level Student',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1',
      content: 'The A-Level bridge course transformed my understanding of complex subjects. The teachers broke down difficult concepts into manageable parts, and the regular assessments kept me on track.',
    },
    {
      id: 4,
      name: 'Sarita Yadav',
      position: 'Nursing Student',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1',
      content: 'The staff nurse preparation program gave me the confidence to face my entrance exams. The practice sessions and personalized attention from teachers made a significant difference in my performance.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Our success is measured by the achievements of our students. Here's what some of them have to say about their experience with us.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-secondary opacity-50" />
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
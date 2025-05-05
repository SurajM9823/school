import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/home/HeroSlider';
import AnnouncementTicker from '../components/ui/AnnouncementTicker';
import CollegeIntro from '../components/home/CollegeIntro';
import PopularCourses from '../components/courses/PopularCourses';
import TestimonialSection from '../components/home/TestimonialSection';
import PartnerSection from '../components/home/PartnerSection';
import NoticeList from '../components/notice/NoticeList';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const announcements = [
    'SEE EXAMS OVER? Join our Bridge Courses starting from 7th Baisakh!',
    'SCHOLARSHIP TEST on 4th Baisakh at 11:00 AM. Register now!',
    'Now offering special Computer Courses for skill development',
    'New admissions open for all programs. Apply today!',
  ];

  return (
    <div>
      <AnnouncementTicker announcements={announcements} />
      <HeroSlider />
      
      <CollegeIntro />
      
      <PopularCourses />
      
      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Join Lord Buddha College & Success Institute for quality education and a bright future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/admission" className="btn bg-white text-primary hover:bg-gray-100">
                Apply Now
              </Link>
              <Link to="/courses" className="btn border border-white text-white hover:bg-white hover:text-primary">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      
      {/* Latest Notices Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Latest Notices</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Stay updated with the latest announcements and events at Lord Buddha College.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <NoticeList />
            
            <div className="text-center mt-8">
              <Link to="/notice-board" className="inline-flex items-center text-primary font-medium hover:underline">
                View all notices <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <PartnerSection />
    </div>
  );
};

export default HomePage;
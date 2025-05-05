import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

interface Course {
  id: number;
  title: string;
  category: string;
  duration: string;
  startDate: string;
  image: string;
  description: string;
}

const PopularCourses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: 'A-Level Bridge Course',
      category: 'Bridge Course',
      duration: '3 Months',
      startDate: '7th Baisakh',
      image: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive preparation for students planning to pursue A-Level education, covering all fundamental concepts.',
    },
    {
      id: 2,
      title: '+2 Science Bridge Course',
      category: 'Bridge Course',
      duration: '2 Months',
      startDate: '7th Baisakh',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Prepare for +2 Science with our intensive bridge course covering Physics, Chemistry, Biology, and Mathematics.',
    },
    {
      id: 3,
      title: 'Engineering Diploma Entrance',
      category: 'Entrance Prep',
      duration: '3 Months',
      startDate: '7th Baisakh',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Targeted preparation for Engineering Diploma entrance exams with focus on problem-solving and technical concepts.',
    },
    {
      id: 4,
      title: 'Staff Nurse Entrance Preparation',
      category: 'Entrance Prep',
      duration: '2 Months',
      startDate: '7th Baisakh',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive preparation for Staff Nurse entrance exams covering all relevant subjects and practice tests.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Popular Courses</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore our most sought-after courses designed to help you succeed in your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/courses" className="btn btn-primary">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
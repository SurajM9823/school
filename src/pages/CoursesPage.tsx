import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, CheckCircle, User, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  slug: string;
  category: 'bridge' | 'entrance';
  subcategory: string;
  description: string;
  image: string;
  duration: string;
  startDate: string;
  fee: string;
  eligibility: string;
  features: string[];
}

const CoursesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bridge' | 'entrance'>('all');
  
  const courses: Course[] = [
    {
      id: 1,
      title: 'A-Level Bridge Course',
      slug: 'a-level-bridge',
      category: 'bridge',
      subcategory: 'A-Level',
      description: 'Comprehensive preparation course for students planning to pursue A-Level education. Our program covers all fundamental concepts required for a smooth transition to A-Level studies.',
      image: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3 Months',
      startDate: '7th Baisakh',
      fee: 'Rs. 15,000',
      eligibility: 'SEE/SLC passed students',
      features: [
        'Experienced A-Level teachers',
        'Comprehensive study materials',
        'Regular assessments and feedback',
        'Practical laboratory sessions',
        'Career counseling',
      ],
    },
    {
      id: 2,
      title: '+2 Science Bridge Course',
      slug: 'plus-two-science-bridge',
      category: 'bridge',
      subcategory: '+2 Science',
      description: 'Prepare for +2 Science with our intensive bridge course covering Physics, Chemistry, Biology, and Mathematics. This course is designed to build a strong foundation for higher secondary education.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 Months',
      startDate: '7th Baisakh',
      fee: 'Rs. 12,000',
      eligibility: 'SEE/SLC passed students with science',
      features: [
        'Subject specialists for each subject',
        'Focus on conceptual understanding',
        'Regular practical sessions',
        'Mock tests and question solving',
        'Special doubt clearing sessions',
      ],
    },
    {
      id: 3,
      title: '+2 Management Bridge Course',
      slug: 'plus-two-management-bridge',
      category: 'bridge',
      subcategory: '+2 Management',
      description: 'Get a head start on your +2 Management studies with our comprehensive bridge course. Covers core subjects including Accounting, Business Studies, Economics, and Mathematics.',
      image: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2 Months',
      startDate: '7th Baisakh',
      fee: 'Rs. 10,000',
      eligibility: 'SEE/SLC passed students',
      features: [
        'Introduction to business fundamentals',
        'Basic accounting concepts',
        'Economics principles',
        'Mathematical methods for business',
        'Case studies and practical applications',
      ],
    },
    {
      id: 4,
      title: 'Engineering Diploma Entrance Preparation',
      slug: 'engineering-diploma-entrance',
      category: 'entrance',
      subcategory: 'Engineering',
      description: 'Targeted preparation for Engineering Diploma entrance exams with focus on problem-solving skills and technical concepts required for success in the entrance test.',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3 Months',
      startDate: '7th Baisakh',
      fee: 'Rs. 18,000',
      eligibility: 'SEE/SLC passed students with min. C grade in Science & Math',
      features: [
        'Comprehensive coverage of entrance syllabus',
        'Regular mock tests and evaluations',
        'Question bank and practice sets',
        'Tips and strategies for entrance exams',
        'One-on-one doubt solving sessions',
      ],
    },
    {
      id: 5,
      title: 'O.A. Entrance Preparation',
      slug: 'overseer-agriculture-entrance',
      category: 'entrance',
      subcategory: 'Agriculture',
      description: 'Specialized program for Overseer Agriculture (O.A.) entrance exam preparation, covering all topics in the entrance syllabus with emphasis on agricultural sciences.',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2.5 Months',
      startDate: '7th Baisakh',
      fee: 'Rs. 16,000',
      eligibility: 'SEE/SLC passed students with science background',
      features: [
        'Subject experts from agriculture field',
        'Specialized agriculture study materials',
        'Weekly mock tests based on actual pattern',
        'Agricultural science practical exposure',
        'Previous years\' question discussion',
      ],
    },
    {
      id: 6,
      title: 'Staff Nurse Entrance Preparation',
      slug: 'staff-nurse-entrance',
      category: 'entrance',
      subcategory: 'Medical',
      description: 'Comprehensive preparation for Staff Nurse entrance exams covering Biology, Physics, Chemistry, English and General Knowledge with focus on nursing concepts.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3 Months',
      startDate: '7th Baisakh',
      fee: 'Rs. 17,000',
      eligibility: 'SEE/SLC passed female students with science',
      features: [
        'Experienced nursing faculty',
        'Complete study materials and nursing fundamentals',
        'Regular tests and performance tracking',
        'Basic nursing concept introduction',
        'Special focus on biology and human anatomy',
      ],
    },
    {
      id: 7,
      title: 'Pharmacy Entrance Preparation',
      slug: 'pharmacy-entrance',
      category: 'entrance',
      subcategory: 'Medical',
      description: 'Specialized preparation course for Pharmacy entrance exams with in-depth coverage of Chemistry, Biology, Physics, Mathematics, and English.',
      image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3 Months',
      startDate: '7th Baisakh',
      fee: 'Rs. 18,000',
      eligibility: 'SEE/SLC passed students with min. C+ grade in Science subjects',
      features: [
        'Expert faculty with pharmacy background',
        'Specialized focus on chemistry and biology',
        'Regular problem-solving sessions',
        'Mock tests modeled after actual entrance exams',
        'Performance analysis and improvement strategies',
      ],
    },
    {
      id: 8,
      title: 'H.A. Entrance Preparation',
      slug: 'health-assistant-entrance',
      category: 'entrance',
      subcategory: 'Medical',
      description: 'Comprehensive Health Assistant (H.A.) entrance preparation course covering all aspects of the entrance examination with special focus on medical concepts.',
      image: 'https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3 Months',
      startDate: '7th Baisakh',
      fee: 'Rs. 17,000',
      eligibility: 'SEE/SLC passed students with science background',
      features: [
        'Focused preparation for health-related topics',
        'Comprehensive study materials',
        'Regular practice tests and evaluations',
        'Subject experts from health sciences',
        'Interview preparation assistance',
      ],
    },
  ];
  
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses & Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our wide range of bridge courses and entrance preparation programs designed to help you succeed.
          </p>
        </div>
      </section>

      {/* Filters & Course Listing */}
      <section className="py-16">
        <div className="container">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveCategory('bridge')}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === 'bridge' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Bridge Courses
            </button>
            <button
              onClick={() => setActiveCategory('entrance')}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === 'entrance' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Entrance Preparation
            </button>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} id={`course-${course.id}`} className="card flex flex-col">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {course.subcategory}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Clock size={16} className="mr-2 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span>Starts: {course.startDate}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <User size={16} className="mr-2 text-primary" />
                    <span>{course.eligibility}</span>
                  </div>
                  <div className="flex items-center text-sm font-semibold">
                    <Award size={16} className="mr-2 text-primary" />
                    <span>{course.fee}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle size={14} className="mr-2 text-primary flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4 border-t flex justify-between">
                  <button className="text-primary font-medium hover:underline">
                    View Details
                  </button>
                  <Link to="/admission" className="btn btn-sm btn-primary">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 mb-8">
              Contact us for more information about our programs or to request a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/admission" className="btn btn-outline">
                Admission Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
import React from 'react';
import { ArrowRight, BookOpen, Users, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollegeIntro: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: 'Quality Education',
      description: 'Our curriculum is designed to provide comprehensive learning with practical experience.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Experienced Faculty',
      description: 'Learn from experienced teachers dedicated to your academic success.',
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: 'Modern Facilities',
      description: 'Access to well-equipped labs, library, and digital learning resources.',
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Proven Success',
      description: 'Track record of successful placements and entrance exam results.',
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Welcome to Lord Buddha College</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Since our establishment, we've been dedicated to providing quality education and preparing students
            for success in their academic and professional journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="College campus"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision & Mission</h3>
            <p className="text-gray-600 mb-4">
              At Lord Buddha College & Success Institute, we strive to create a learning environment that nurtures intellectual
              growth, critical thinking, and personal development. Our mission is to provide accessible, quality education
              that prepares students for future challenges.
            </p>
            <p className="text-gray-600 mb-6">
              Located in Lahan, our institution offers various bridge courses and entrance preparation programs designed
              to help students achieve their academic and career goals.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary font-medium hover:underline">
              Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="card flex flex-col items-center text-center p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/courses" className="btn btn-primary">
            Explore Our Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollegeIntro;
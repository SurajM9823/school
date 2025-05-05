import React from 'react';
import { BookOpen, Award, Users, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const faculty = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      position: 'Principal',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300',
      qualification: 'Ph.D. in Education',
    },
    {
      id: 2,
      name: 'Prof. Anita Sharma',
      position: 'Head of Science Department',
      image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=300',
      qualification: 'M.Sc. Physics, B.Ed.',
    },
    {
      id: 3,
      name: 'Mr. Binod Thapa',
      position: 'Mathematics Faculty',
      image: 'https://images.pexels.com/photos/8617797/pexels-photo-8617797.jpeg?auto=compress&cs=tinysrgb&w=300',
      qualification: 'M.Sc. Mathematics',
    },
    {
      id: 4,
      name: 'Mrs. Priya Yadav',
      position: 'Chemistry Faculty',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=300',
      qualification: 'M.Sc. Chemistry',
    },
    {
      id: 5,
      name: 'Mr. Santosh Gupta',
      position: 'Biology Faculty',
      image: 'https://images.pexels.com/photos/8617841/pexels-photo-8617841.jpeg?auto=compress&cs=tinysrgb&w=300',
      qualification: 'M.Sc. Biology',
    },
    {
      id: 6,
      name: 'Mrs. Manisha Jha',
      position: 'English Faculty',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=300',
      qualification: 'M.A. English Literature',
    },
    {
      id: 7,
      name: 'Mr. Dipak Shah',
      position: 'Computer Science Faculty',
      image: 'https://images.pexels.com/photos/8617814/pexels-photo-8617814.jpeg?auto=compress&cs=tinysrgb&w=300',
      qualification: 'M.Sc. Computer Science',
    },
    {
      id: 8,
      name: 'Dr. Sunita Rai',
      position: 'Physics Faculty',
      image: 'https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=300',
      qualification: 'Ph.D. in Physics',
    },
  ];

  const affiliations = [
    {
      id: 1,
      name: 'Council for Technical Education and Vocational Training (CTEVT)',
      description: 'Official affiliation for technical and vocational programs.',
    },
    {
      id: 2,
      name: 'National Examination Board (NEB)',
      description: 'Recognized institution for +2 Science and Management programs.',
    },
    {
      id: 3,
      name: 'Ministry of Education, Science and Technology',
      description: 'Approved by the government for educational services.',
    },
    {
      id: 4,
      name: 'Cambridge Assessment International Education',
      description: 'Partner institution for A-Level education programs.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-accent py-20 relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our history, mission, and the dedicated team behind Lord Buddha College & Success Institute.
          </p>
        </div>
      </section>

      {/* History & Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our History</h2>
              <p className="text-gray-600 mb-4">
                Lord Buddha College & Success Institute was established in 2010 with a vision to provide quality education to students from all backgrounds. 
                Starting with just a handful of students and a small campus, we have grown into a premier educational institution in Lahan.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have expanded our offerings to include various bridge courses and entrance preparation programs, 
                helping thousands of students achieve their academic and career goals.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by a commitment to excellence, innovation in teaching methodologies, and a 
                student-centered approach that prioritizes individual growth and development.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BookOpen className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Quality Education</h3>
                    <p className="text-gray-600">
                      Provide high-quality education that prepares students for academic success and future challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Academic Excellence</h3>
                    <p className="text-gray-600">
                      Foster a culture of academic excellence through innovative teaching methods and comprehensive curricula.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Inclusive Environment</h3>
                    <p className="text-gray-600">
                      Create an inclusive learning environment that respects diversity and promotes equal opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Community Development</h3>
                    <p className="text-gray-600">
                      Contribute to community development by nurturing responsible citizens and future leaders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Principal's Message</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img 
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Principal Dr. Rajesh Kumar" 
                className="rounded-full w-40 h-40 object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary">Dr. Rajesh Kumar</h3>
                <p className="text-gray-500 mb-4">Principal, Lord Buddha College & Success Institute</p>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Dear Students and Parents,
                  </p>
                  <p className="mb-4">
                    It gives me immense pleasure to welcome you to Lord Buddha College & Success Institute. Our institution 
                    is committed to providing a nurturing environment where students can develop their intellectual, social, 
                    and personal skills.
                  </p>
                  <p className="mb-4">
                    At Lord Buddha College, we believe that education goes beyond textbooks and classrooms. We strive to 
                    prepare our students for the challenges of the future by fostering critical thinking, creativity, and 
                    ethical values.
                  </p>
                  <p>
                    I invite you to explore our programs and facilities, and look forward to welcoming you to our academic family.
                  </p>
                  <p className="mt-4 font-semibold">
                    Dr. Rajesh Kumar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Faculty</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Meet our team of experienced educators dedicated to student success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {faculty.map((member) => (
              <div key={member.id} className="card text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.position}</p>
                <p className="text-gray-500 text-sm">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Affiliations</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Lord Buddha College & Success Institute is proud to be affiliated with these esteemed organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {affiliations.map((affiliation) => (
              <div key={affiliation.id} className="card flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2 text-primary">{affiliation.name}</h3>
                <p className="text-gray-600">{affiliation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
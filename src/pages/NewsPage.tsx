import React, { useState } from 'react';
import { Calendar, Clock, User, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'College Achieves 95% Success Rate in Engineering Entrance',
      excerpt: 'Lord Buddha College students excel in engineering entrance examinations with record-breaking results.',
      content: 'Students from Lord Buddha College & Success Institute have achieved an impressive 95% success rate in this year\'s engineering entrance examinations. This is the highest success rate in the college\'s history and among the top performances in the region. The achievement is attributed to the dedicated faculty, innovative teaching methods, and the hard work of the students.',
      date: '2025-04-01',
      author: 'Admin',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Academic Achievement',
    },
    {
      id: 2,
      title: 'New Science Laboratory Inaugurated',
      excerpt: 'State-of-the-art science laboratory inaugurated to enhance practical learning experience for students.',
      content: 'Lord Buddha College & Success Institute has inaugurated a new state-of-the-art science laboratory. The laboratory is equipped with modern apparatus and facilities for Physics, Chemistry, and Biology experiments. The new laboratory will provide students with enhanced practical learning experiences and support their academic and research endeavors.',
      date: '2025-03-25',
      author: 'Admin',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Facility Update',
    },
    {
      id: 3,
      title: 'Annual Sports Meet Concludes with Great Enthusiasm',
      excerpt: 'The week-long annual sports meet concluded with active participation from students across all programs.',
      content: 'The annual sports meet of Lord Buddha College & Success Institute concluded with a grand closing ceremony. The week-long event saw enthusiastic participation from students across all programs. Various sports competitions including football, basketball, volleyball, athletics, and indoor games were organized. The college management emphasized the importance of sports in overall student development.',
      date: '2025-03-15',
      author: 'Sports Committee',
      image: 'https://images.pexels.com/photos/8427046/pexels-photo-8427046.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Sports',
    },
    {
      id: 4,
      title: 'College Signs MOU with International University',
      excerpt: 'Lord Buddha College enters into an academic partnership with a prestigious international university.',
      content: 'Lord Buddha College & Success Institute has signed a Memorandum of Understanding (MOU) with a prestigious international university. The partnership aims to facilitate student and faculty exchange programs, joint research projects, and curriculum development. This collaboration will provide students with international exposure and enhance the quality of education at the college.',
      date: '2025-03-10',
      author: 'Admin',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Partnership',
    },
    {
      id: 5,
      title: 'College Hosts National Level Science Exhibition',
      excerpt: 'Students from across the country participated in the national level science exhibition hosted by the college.',
      content: 'Lord Buddha College & Success Institute successfully hosted a national level science exhibition. Students from various colleges across the country participated in the event, showcasing innovative projects and research works. The exhibition provided a platform for young scientists to demonstrate their creativity and scientific knowledge. Renowned scientists and academicians served as judges for the competition.',
      date: '2025-03-05',
      author: 'Science Department',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Event',
    },
    {
      id: 6,
      title: 'College Introduces New Scholarship Scheme',
      excerpt: 'New scholarship scheme announced to support meritorious and economically disadvantaged students.',
      content: 'Lord Buddha College & Success Institute has introduced a new scholarship scheme to support meritorious and economically disadvantaged students. The scheme offers financial assistance ranging from partial to full fee waivers based on academic performance and financial need. The college management stated that the initiative aims to ensure that deserving students are not deprived of quality education due to financial constraints.',
      date: '2025-02-28',
      author: 'Admin',
      image: 'https://images.pexels.com/photos/6927334/pexels-photo-6927334.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Announcement',
    },
  ];

  const upcomingEvents: EventItem[] = [
    {
      id: 1,
      title: 'Scholarship Test',
      date: '4th Baisakh, 2025',
      time: '11:00 AM',
      venue: 'College Main Hall',
      description: 'Scholarship test for all programs. Register now to secure your seat.',
    },
    {
      id: 2,
      title: 'New Session Begins',
      date: '7th Baisakh, 2025',
      time: '7:00 AM',
      venue: 'College Campus',
      description: 'Classes for all bridge courses and entrance preparation programs begin.',
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      date: '15th Baisakh, 2025',
      time: '1:00 PM - 4:00 PM',
      venue: 'College Auditorium',
      description: 'Meeting to discuss student progress and address parent concerns.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'Academic Achievement', name: 'Academic' },
    { id: 'Facility Update', name: 'Facilities' },
    { id: 'Sports', name: 'Sports' },
    { id: 'Event', name: 'Events' },
    { id: 'Partnership', name: 'Partnerships' },
    { id: 'Announcement', name: 'Announcements' },
  ];

  const filteredNews = newsItems
    .filter(news => 
      (activeCategory === 'all' || news.category === activeCategory) &&
      (searchTerm === '' || 
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.content.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at Lord Buddha College.
          </p>
        </div>
      </section>

      {/* News & Events Content */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search and Filter */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 text-sm rounded-full transition-colors ${
                        activeCategory === category.id 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* News Items */}
              <div className="space-y-8">
                {filteredNews.length > 0 ? (
                  filteredNews.map((news) => (
                    <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                              {news.category}
                            </span>
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {news.date}
                            </span>
                            <span className="flex items-center">
                              <User size={14} className="mr-1" />
                              {news.author}
                            </span>
                          </div>
                          
                          <h2 className="text-xl md:text-2xl font-bold mb-3">{news.title}</h2>
                          <p className="text-gray-600 mb-4">{news.excerpt}</p>
                          
                          <div>
                            <button className="text-primary hover:underline flex items-center font-medium">
                              Read more <ChevronRight size={16} className="ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg shadow-md">
                    <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setActiveCategory('all');
                      }}
                      className="mt-4 text-primary hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Upcoming Events */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-6 pb-2 border-b">Upcoming Events</h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-3">{event.date}</span>
                        <Clock size={14} className="mr-1" />
                        <span>{event.time}</span>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Venue: {event.venue}
                      </div>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <Link to="/notice-board" className="text-primary hover:underline flex items-center justify-end font-medium">
                    View all events <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              {/* News Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4 pb-2 border-b">Categories</h2>
                <ul className="space-y-3">
                  {categories.slice(1).map((category) => (
                    <li key={category.id}>
                      <button 
                        onClick={() => setActiveCategory(category.id)}
                        className="flex items-center justify-between w-full text-left py-2 px-3 rounded-md hover:bg-gray-100"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          {newsItems.filter(item => item.category === category.id).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-primary bg-opacity-10 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 text-primary">Subscribe to Newsletter</h2>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest news, events, and announcements from Lord Buddha College.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <button type="button" className="btn btn-primary w-full">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
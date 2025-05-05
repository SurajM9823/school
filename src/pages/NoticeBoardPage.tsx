import React, { useState } from 'react';
import NoticeItem from '../components/notice/NoticeItem';
import { Search } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  isImportant?: boolean;
}

const NoticeBoardPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const notices: Notice[] = [
    {
      id: 1,
      title: 'Scholarship Test on 4th Baisakh',
      date: '2025-04-01',
      category: 'Examination',
      content: 'The scholarship test for all programs will be conducted on 4th Baisakh at 11:00 AM. All eligible students are encouraged to participate. The test will be held at the college main hall. Please bring your identification and admission card.',
      isImportant: true,
    },
    {
      id: 2,
      title: 'Classes Starting from 7th Baisakh',
      date: '2025-04-02',
      category: 'Academic',
      content: 'All bridge courses and entrance preparation classes will commence from 7th Baisakh. Students are requested to complete their admission process before the start date. The time-table will be announced on 5th Baisakh.',
      isImportant: true,
    },
    {
      id: 3,
      title: 'Orientation Program Schedule',
      date: '2025-04-05',
      category: 'Event',
      content: 'Orientation program for new students will be held on 6th Baisakh at the college auditorium. Attendance is mandatory for all newly admitted students. Parents are also welcome to attend. The program will start at 10:00 AM.',
    },
    {
      id: 4,
      title: 'Lab Equipment Demonstration',
      date: '2025-04-08',
      category: 'Academic',
      content: 'A demonstration of new lab equipment for Science students will be conducted on 8th Baisakh. Interested students can register at the administration office. The demonstration will be held in the Science lab from 2:00 PM to 4:00 PM.',
    },
    {
      id: 5,
      title: 'Computer Skill Development Workshop',
      date: '2025-04-10',
      category: 'Workshop',
      content: 'A three-day workshop on computer skills development will be organized from 10th to 12th Baisakh. Topics include basic programming, MS Office, and internet usage. Limited seats available. Register at the computer lab.',
    },
    {
      id: 6,
      title: 'Parent-Teacher Meeting',
      date: '2025-04-15',
      category: 'Event',
      content: 'A parent-teacher meeting will be held on 15th Baisakh from 1:00 PM to 4:00 PM. Parents are requested to attend and discuss their ward\'s progress and any concerns with the respective teachers.',
    },
    {
      id: 7,
      title: 'Holiday Announcement for Dashain Festival',
      date: '2025-04-20',
      category: 'Holiday',
      content: 'The college will remain closed from 22nd to 30th Baisakh for Dashain festival. Classes will resume on 1st Jestha. The administration office will be open on 25th Baisakh for emergency services.',
    },
    {
      id: 8,
      title: 'Mock Test Series for Entrance Exams',
      date: '2025-05-02',
      category: 'Examination',
      content: 'A series of mock tests for various entrance examinations will begin from 5th Jestha. The schedule will be displayed on the notice board. All students enrolled in entrance preparation courses are required to participate.',
    },
    {
      id: 9,
      title: 'Library Book Return Reminder',
      date: '2025-05-05',
      category: 'Administration',
      content: 'All students who have borrowed books from the library are requested to return them by 10th Jestha. Late returns will be subject to a fine as per library rules. New books will be available from 15th Jestha.',
    },
    {
      id: 10,
      title: 'Science Exhibition Announcement',
      date: '2025-05-10',
      category: 'Event',
      content: 'An inter-college science exhibition will be held on 20th Jestha. Interested students can form teams and register their projects by 15th Jestha. Prizes will be awarded for the best projects in various categories.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Notices' },
    { id: 'Academic', name: 'Academic' },
    { id: 'Examination', name: 'Examination' },
    { id: 'Event', name: 'Events' },
    { id: 'Workshop', name: 'Workshops' },
    { id: 'Administration', name: 'Administration' },
    { id: 'Holiday', name: 'Holidays' },
  ];

  const filteredNotices = notices
    .filter(notice => 
      (activeCategory === 'all' || notice.category === activeCategory) &&
      (searchTerm === '' || 
        notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.content.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-accent py-20 relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notice Board</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest announcements, events, and important dates.
          </p>
        </div>
      </section>

      {/* Notice Board */}
      <section className="py-16">
        <div className="container">
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search notices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              {/* Category Filters */}
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
          </div>
          
          {/* Notices */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice) => (
                  <NoticeItem
                    key={notice.id}
                    title={notice.title}
                    date={notice.date}
                    category={notice.category}
                    content={notice.content}
                    isImportant={notice.isImportant}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                  <p className="text-gray-500 text-lg">No notices found matching your criteria.</p>
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
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Notice Archives</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Access past notices organized by month and year.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">2025</h3>
                  <ul className="space-y-2">
                    <li>
                      <button className="text-primary hover:underline">Baisakh (April-May)</button>
                    </li>
                    <li>
                      <button className="text-primary hover:underline">Jestha (May-June)</button>
                    </li>
                    <li>
                      <button className="text-primary hover:underline">Asar (June-July)</button>
                    </li>
                    <li>
                      <button className="text-gray-400 cursor-not-allowed">Shrawan (July-August)</button>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">2024</h3>
                  <ul className="space-y-2">
                    <li>
                      <button className="text-primary hover:underline">Chaitra (March-April)</button>
                    </li>
                    <li>
                      <button className="text-primary hover:underline">Falgun (February-March)</button>
                    </li>
                    <li>
                      <button className="text-primary hover:underline">Magh (January-February)</button>
                    </li>
                    <li>
                      <button className="text-primary hover:underline">Poush (December-January)</button>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button className="text-primary hover:underline">Admissions</button>
                    </li>
                    <li>
                      <button className="text-primary hover:underline">Examinations</button>
                    </li>
                    <li>
                      <button className="text-primary hover:underline">Results</button>
                    </li>
                    <li>
                      <button className="text-primary hover:underline">Events & Activities</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticeBoardPage;
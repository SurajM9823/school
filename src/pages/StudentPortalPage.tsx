import React, { useState } from 'react';
import { User, Lock, LogIn, FileText, Calendar, BookOpen, BarChart, Bell } from 'lucide-react';

const StudentPortalPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });
  const [loginError, setLoginError] = useState('');

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when typing
    if (loginError) setLoginError('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!loginData.username.trim() || !loginData.password.trim()) {
      setLoginError('Please enter both username and password');
      return;
    }
    
    // For demo purposes, login with any credentials
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({
      username: '',
      password: '',
      rememberMe: false,
    });
  };

  // Dashboard data (demo data)
  const announcements = [
    {
      id: 1,
      title: 'Mock Test Results Published',
      date: '2025-04-05',
      content: 'Results for the first mock test are now available. Check your performance in the Results section.',
    },
    {
      id: 2,
      title: 'Holiday for Dashain Festival',
      date: '2025-04-02',
      content: 'The college will remain closed from 22nd to 30th Baisakh for Dashain festival. Classes will resume on 1st Jestha.',
    },
    {
      id: 3,
      title: 'Upcoming Science Exhibition',
      date: '2025-04-01',
      content: 'Science exhibition will be held on 20th Jestha. Interested students can register their projects by 15th Jestha.',
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      subject: 'Physics',
      time: '7:00 AM - 8:30 AM',
      teacher: 'Mr. Binod Thapa',
      room: 'Room 101',
    },
    {
      id: 2,
      subject: 'Chemistry',
      time: '8:45 AM - 10:15 AM',
      teacher: 'Mrs. Priya Yadav',
      room: 'Lab 201',
    },
    {
      id: 3,
      subject: 'Mathematics',
      time: '10:30 AM - 12:00 PM',
      teacher: 'Mr. Santosh Gupta',
      room: 'Room 103',
    },
  ];

  const studyMaterials = [
    {
      id: 1,
      title: 'Physics Formula Sheet',
      type: 'PDF',
      size: '2.5 MB',
      uploadedOn: '2025-04-01',
    },
    {
      id: 2,
      title: 'Chemistry Notes - Chapter 5',
      type: 'PDF',
      size: '3.8 MB',
      uploadedOn: '2025-03-28',
    },
    {
      id: 3,
      title: 'Mathematics Problem Set',
      type: 'PDF',
      size: '1.7 MB',
      uploadedOn: '2025-03-25',
    },
    {
      id: 4,
      title: 'Biology Diagrams',
      type: 'PDF',
      size: '4.2 MB',
      uploadedOn: '2025-03-20',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-accent py-20 relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Portal</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access your academic information, study materials, and stay updated with notices.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary bg-opacity-10 text-primary mb-4">
                    <User size={32} />
                  </div>
                  <h2 className="text-2xl font-bold">Student Login</h2>
                  <p className="text-gray-600 mt-2">
                    Enter your credentials to access the student portal
                  </p>
                </div>
                
                {loginError && (
                  <div className="bg-error bg-opacity-10 text-error p-3 rounded-md mb-4">
                    {loginError}
                  </div>
                )}
                
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={loginData.username}
                        onChange={handleLoginChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={loginData.rememberMe}
                        onChange={handleLoginChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    <LogIn size={16} className="mr-2" />
                    Log In
                  </button>
                </form>
                
                <div className="mt-6 text-center text-sm">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-primary hover:underline font-medium">
                      Contact administration
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Student Dashboard
            <div>
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-primary">Student Dashboard</h2>
                  <p className="text-gray-600">Welcome back, Student!</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline"
                >
                  Logout
                </button>
              </div>
              
              {/* Dashboard Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                  <div className="rounded-full bg-primary bg-opacity-10 p-3 mr-4">
                    <Calendar size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Attendance</h3>
                    <p className="text-2xl font-bold">92%</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                  <div className="rounded-full bg-secondary bg-opacity-10 p-3 mr-4">
                    <BarChart size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Performance</h3>
                    <p className="text-2xl font-bold">B+</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                  <div className="rounded-full bg-success bg-opacity-10 p-3 mr-4">
                    <BookOpen size={24} className="text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Courses</h3>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                  <div className="rounded-full bg-warning bg-opacity-10 p-3 mr-4">
                    <Bell size={24} className="text-warning" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Notifications</h3>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Announcements */}
                <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b">Recent Announcements</h3>
                  <div className="space-y-4">
                    {announcements.map((announcement) => (
                      <div key={announcement.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{announcement.title}</h4>
                          <span className="text-xs text-gray-500">{announcement.date}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{announcement.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Upcoming Classes */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b">Today's Schedule</h3>
                  <div className="space-y-4">
                    {upcomingClasses.map((classItem) => (
                      <div key={classItem.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-semibold text-primary">{classItem.subject}</h4>
                        <p className="text-sm text-gray-600">{classItem.time}</p>
                        <p className="text-sm text-gray-600">Teacher: {classItem.teacher}</p>
                        <p className="text-sm text-gray-600">Location: {classItem.room}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Study Materials */}
              <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Study Materials</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Size
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Uploaded On
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {studyMaterials.map((material) => (
                        <tr key={material.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FileText size={16} className="text-gray-400 mr-2" />
                              <span>{material.title}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {material.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {material.size}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {material.uploadedOn}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a href="#" className="text-primary hover:underline">Download</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default StudentPortalPage;
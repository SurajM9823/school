import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionPage from './pages/AdmissionPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import NoticeBoardPage from './pages/NoticeBoardPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import StudentPortalPage from './pages/StudentPortalPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="admission" element={<AdmissionPage />} />
        <Route path="facilities" element={<FacilitiesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="notice-board" element={<NoticeBoardPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="student-portal" element={<StudentPortalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
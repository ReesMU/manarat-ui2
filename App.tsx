import React, { useEffect, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Guide from './pages/Guide';
import Instructors from './pages/Instructors';
import Contact from './pages/Contact';
import { getLivePrograms } from './constants';
import { Program } from './types';

function App() {
  const [programs, setPrograms] = useState<Program[]>([]);

  // جلب البيانات عند تشغيل الموقع لضمان تحديث كل الصفحات
  useEffect(() => {
    getLivePrograms().then(data => setPrograms(data));
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <Routes>
            {/* الصفحة الرئيسية */}
            <Route path="/" element={<Home programs={programs} />} />
            
            {/* صفحة جميع الكورسات */}
            <Route path="/courses" element={<Courses programs={programs} />} />
            
            {/* صفحة الدليل التعليمي */}
            <Route path="/guide" element={<Guide />} />
            
            {/* صفحة المدرسين */}
            <Route path="/instructors" element={<Instructors />} />
            
            {/* صفحة اتصل بنا */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

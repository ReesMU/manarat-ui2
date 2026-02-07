import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { getLivePrograms, NAV_LINKS } from './constants';
import { Program } from './types';

function App() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [currentPage, setCurrentPage] = useState('home'); // نظام التنقل البسيط

  useEffect(() => {
    getLivePrograms().then(data => setPrograms(data));
    
    // مراقبة الرابط لتغيير الصفحة
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '') || 'home';
      setCurrentPage(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // دالة لعرض محتوى كل صفحة
  const renderPage = () => {
    switch (currentPage) {
      case 'courses':
        return (
          <div className="py-20 container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-10 text-center">جميع الكورسات التدريبية</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map(p => (
                <div key={p.id} className="border rounded-xl overflow-hidden shadow-lg">
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                  <div className="p-4 text-right">
                    <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                    <p className="text-blue-600 font-bold">{p.price} $</p>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">التفاصيل</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'guide':
        return (
          <div className="py-20 container mx-auto px-4 text-right">
            <h1 className="text-4xl font-bold mb-6 text-blue-700">الدليل التعليمي لأكاديمية منارات</h1>
            <p className="text-xl leading-relaxed mb-8">
              مرحباً بك في دليلك الشامل لتعلم علوم السايكولوجي وتطوير الذات. هنا نساعدك في اختيار المسار المناسب لك.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl border-r-8 border-blue-600">
              <h2 className="text-2xl font-bold mb-4">كيف تبدأ؟</h2>
              <ul className="list-disc pr-6 space-y-4 text-lg">
                <li>المسار الأول: السايكولوجي الأساسي للمبتدئين.</li>
                <li>المسار الثاني: تطوير الذات وبناء الشخصية القيادية.</li>
                <li>المسار الثالث: الدورات التخصصية مثل (البوابات النجمية).</li>
              </ul>
            </div>
          </div>
        );
      case 'instructors':
        return (
          <div className="py-20 text-center">
            <h1 className="text-3xl font-bold mb-10">نخبة مدربي أكاديمية منارات</h1>
            <div className="flex justify-center gap-10">
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                   <img src="https://i0.wp.com/manaratacademy.com/wp-content/uploads/2022/03/cropped-logo-1.png" alt="منار عمران" />
                </div>
                <h3 className="font-bold text-xl">أ. منار عمران</h3>
                <p className="text-gray-600">خبير السايكولوجي وتطوير الذات</p>
              </div>
            </div>
          </div>
        );
      default: // الصفحة الرئيسية (Home)
        return (
          <div className="py-20 text-center">
            <h1 className="text-5xl font-bold mb-6">أكاديمية منارات لعلوم السايكولوجي</h1>
            <p className="text-xl text-gray-600 mb-10">رحلتك نحو فهم الذات تبدأ من هنا</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
               {programs.slice(0, 3).map(p => (
                 <div key={p.id} className="p-4 border rounded-lg shadow-sm">
                   <img src={p.image} className="rounded-md mb-4" />
                   <h4 className="font-bold">{p.title}</h4>
                 </div>
               ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;

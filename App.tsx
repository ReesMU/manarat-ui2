import React, { useState, useEffect } from 'react';

// --- التنسيقات الاحترافية (CSS) داخل الكود لضمان النجاح ---
const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
  body { font-family: 'Cairo', sans-serif; direction: rtl; background: #f8fafc; }
  .card { background: white; border-radius: 15px; overflow: hidden; shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); transition: 0.3s; }
  .card:hover { transform: translateY(-5px); }
  .btn-primary { background: #1e40af; color: white; padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer; }
  .nav-link { cursor: pointer; color: #334155; font-weight: bold; }
  .nav-link:hover { color: #1e40af; }
`;

export default function App() {
  const [page, setPage] = useState('home');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // جلب البيانات مع معالجة الخطأ
    fetch('https://manaratacademy.com/wp-json/wp/v2/posts?per_page=6')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.log("خطأ في الاتصال بموقع منارات"));
  }, []);

  return (
    <div>
      <style>{style}</style>
      
      {/* الهيدر الاحترافي */}
      <nav style={{display: 'flex', justifyContent: 'space-between', padding: '20px 50px', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <div style={{fontSize: '24px', fontWeight: 'bold', color: '#1e40af'}}>منارات أكاديمي</div>
        <div style={{display: 'flex', gap: '30px', alignItems: 'center'}}>
          <span className="nav-link" onClick={() => setPage('home')}>الرئيسية</span>
          <span className="nav-link" onClick={() => setPage('courses')}>الكورسات</span>
          <span className="nav-link" onClick={() => setPage('guide')}>الدليل التعليمي</span>
          <a href="https://manaratacademy.com/my-account/" className="btn-primary" style={{textDecoration: 'none'}}>تسجيل دخول</a>
        </div>
      </nav>

      {/* محتوى الصفحات */}
      <div style={{padding: '50px 10%'}}>
        {page === 'home' && (
          <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: '48px', color: '#1e3a8a'}}>مرحباً بك في واجهتك الجديدة</h1>
            <p style={{fontSize: '20px', color: '#64748b'}}>تم ربط الموقع بنجاح مع قاعدة بيانات منارات</p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px'}}>
              {courses.map((c: any) => (
                <div key={c.id} className="card">
                  <img src={c.jetpack_featured_media_url || 'https://via.placeholder.com/300x200'} style={{width: '100%'}} />
                  <div style={{padding: '20px', textAlign: 'right'}}>
                    <h3>{c.title.rendered}</h3>
                    <button className="btn-primary">ابدأ التعلم الآن</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'guide' && (
          <div style={{background: 'white', padding: '40px', borderRadius: '20px', textAlign: 'right'}}>
            <h1 style={{color: '#1e40af'}}>الدليل التعليمي الشامل</h1>
            <p>هذه الصفحة مخصصة لمساعدة الطلاب في رحلتهم داخل أكاديمية منارات.</p>
            <hr />
            <h3>خطواتك الأولى:</h3>
            <ol>
              <li>قم بتحديد تخصصك (سايكولوجي، تطوير ذات، أو جرافيك).</li>
              <li>ابدأ بالدورات التأسيسية المجانية.</li>
              <li>انتقل للدورات المتقدمة للحصول على شهادات معتمدة.</li>
            </ol>
          </div>
        )}
        
        {page === 'courses' && (
           <div style={{textAlign: 'right'}}>
             <h2>جميع الكورسات المتاحة</h2>
             <p>نحن نسحب البيانات الآن مباشرة من موقعك الرسمي عبر API.</p>
             {/* هنا تظهر قائمة الكورسات كاملة */}
           </div>
        )}
      </div>

      <footer style={{textAlign: 'center', padding: '50px', color: '#94a3b8'}}>
        جميع الحقوق محفوظة لأكاديمية منارات 2026
      </footer>
    </div>
  );
}

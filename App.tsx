import React, { useState, useEffect } from 'react';

// هذا الكود يجمع بين "الشكل الجمالي" و "جلب البيانات الحقيقية"
export default function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // إعدادات الربط - استبدل الرابط برابط موقعك الجديد
  const API_URL = 'https://manaratacademy.com/wp-json/wp/v2/posts';

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => console.error("مشكلة في الاتصال"));
  }, []);

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ background: '#1e40af', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <h1>منصة منارات التعليمية - لوحة الطلاب</h1>
      </header>

      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '50px' }}>جاري مزامنة بياناتك...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {courses.map((course: any) => (
            <div key={course.id} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', background: '#fff' }}>
              <div style={{ padding: '15px' }}>
                <h3 dangerouslySetInnerHTML={{ __html: course.title.rendered }} />
                <button style={{ width: '100%', padding: '10px', background: '#ff9800', border: 'none', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>
                  دخول الكورس
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

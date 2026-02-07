import React, { useState, useEffect } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب البيانات مع إضافة محاولة إصلاح الرابط
    fetch('https://manaratacademy.com/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setPosts(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("خطأ في الربط:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ direction: 'rtl', textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#1e40af' }}>منصة منارات أكاديمي</h1>
      
      {loading ? (
        <div style={{ fontSize: '20px', color: '#666' }}>جاري سحب البيانات من الموقع...</div>
      ) : (
        <div style={{ marginTop: '30px' }}>
          {posts.length > 0 ? (
            posts.map((post: any) => (
              <div key={post.id} style={{ 
                padding: '15px', 
                border: '1px solid #eee', 
                marginBottom: '10px',
                borderRadius: '8px',
                background: '#f9f9f9'
              }}>
                <strong>{post.title.rendered}</strong>
              </div>
            ))
          ) : (
            <div style={{ color: 'red' }}>
              تم الاتصال ولكن لا توجد بيانات. تأكد من وجود مقالات أو كورسات منشورة في ووردبريس.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // جلب البيانات العامة من موقعك للتأكد أن "الجسر" يعمل
    fetch('https://manaratacademy.com/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log("خطأ في الربط"));
  }, []);

  return (
    <div style={{ direction: 'rtl', textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#1e40af' }}>مرحباً بك في واجهة منارات الجديدة</h1>
      <p>إذا ظهرت أسماء الكورسات بالأسفل، فهذا يعني أننا نجحنا!</p>
      
      <div style={{ marginTop: '30px' }}>
        {posts.map((post: any) => (
          <div key={post.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            {post.title.rendered}
          </div>
        ))}
      </div>
    </div>
  );
}

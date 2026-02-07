
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SmartAssistant from './components/SmartAssistant';
import { PROGRAMS } from './constants';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredPrograms = PROGRAMS.filter(prog => 
    prog.title.includes(searchTerm) || prog.titleEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative text-white min-h-[85vh] flex flex-col justify-center overflow-hidden">
          <img 
            src="https://manaratacademy.com/wp-content/uploads/2020/10/pattern-v.png" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-indigo-950"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center py-20">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
              </span>
              ابدأ تدريبك معنا الآن
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              مزايا الدراسة في <br/>
              <span className="text-brand-yellow">أكاديمية منارات</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12 text-right">
              {[
                'محاضرات أسبوعية منتظمة',
                'منهج معتمد من جامعات إنسانية',
                'تأملات ورياضيات روحية',
                'تمارين وشفاءات جسد ونفس',
                'شهادة دولية معتمدة',
                'تغيير حقيقي وعميق في الوعي'
              ].map(feat => (
                <div key={feat} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark font-bold">✓</span>
                  <span className="text-gray-200 font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#/pricing" className="bg-brand-yellow text-brand-dark px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                ابدأ الدراسة الآن
              </a>
              <div className="max-w-md w-full relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="ابحث عن كورس معين..." 
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 px-8 text-white text-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Video Section */}
        <section className="py-24 bg-brand-light relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12">فيديو تعريفي بالأكاديمية</h2>
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-video bg-black">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/zsd54G6ZY24" 
                title="Manarat Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-6">
                <h6 className="text-brand-yellow font-bold tracking-widest uppercase">لماذا عليك اختيارنا؟</h6>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">بصمة المحبّة في كل مادة</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  على الساحة عشرات من المتحدثين بعلوم تطوير الذات وعلوم الطاقة الكونية وعلوم الروحانيات والنفس، لكن ما يميزنا هو نسمة وبصمة المحبة التي نمنحها فيما بيننا والتي تظهر في أثير كل مادة نقدمها وتظهر أيضاً في سمو مقامات روح كل من يتقدم للدراسة في أكاديميتنا.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'منهج لجميع المستويات', desc: 'معتمد من جامعات عالمية ويتناسب مع جميع الفئات العمرية.', icon: '👑' },
                    { title: 'تعلم عبر الإنترنت', desc: 'فيديوهات وصوتيات متاحة بشكل غير محدود وفي أي وقت.', icon: '⏰' },
                    { title: 'شهادة مهنية', desc: 'احصل على شهادة معتمدة للتقديم على عمل أو تصبح مدرب معتمد.', icon: '📜' }
                  ].map(item => (
                    <div key={item.title} className="flex gap-4 p-4 rounded-2xl hover:bg-brand-light transition-all border border-transparent hover:border-brand-yellow/20">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                 <img src="https://i0.wp.com/manaratacademy.com/wp-content/uploads/2022/03/photo_2021-11-16_21-14-32.jpg" className="w-full h-64 object-cover rounded-3xl shadow-lg mt-12" alt="Student" />
                 <img src="https://i0.wp.com/manaratacademy.com/wp-content/uploads/2022/03/photo_2020-11-05_19-41-43.jpg" className="w-full h-64 object-cover rounded-3xl shadow-lg" alt="Student" />
                 <div className="col-span-2 bg-brand-yellow p-8 rounded-3xl text-brand-dark">
                    <h4 className="text-2xl font-black mb-4">أكثر من 2394 تقييم</h4>
                    <p className="font-bold text-lg">بمتوسط 4.8 نجوم على جوجل ريفيوز، نحن الأكاديمية الأكثر ثقة في علوم الوعي.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Grid */}
        <section className="py-24 bg-brand-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-brand-dark mb-4">استكشف كورساتنا</h2>
              <p className="text-gray-500">اختر من بين أقوى البرامج التعليمية في علوم الوعي والسايكولوجي</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPrograms.map(prog => (
                <div key={prog.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-56">
                    <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 bg-brand-yellow text-brand-dark px-4 py-1 rounded-full font-bold shadow-lg">
                      ${prog.price}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-yellow transition-colors leading-snug">{prog.title}</h3>
                    <p className="text-xs text-gray-400 font-medium mb-6 uppercase tracking-wider" dir="ltr">{prog.titleEn}</p>
                    
                    <div className="grid grid-cols-2 gap-4 border-t pt-4 text-sm font-semibold text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="text-brand-yellow">⏳</span> {prog.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-brand-yellow">👤</span> {prog.studentsCount} طالب
                      </div>
                    </div>
                    
                    <button className="mt-8 w-full bg-brand-dark text-white py-4 rounded-2xl font-bold hover:bg-black transition-all">
                      اقرأ المزيد عن الكورس
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden bg-brand-dark text-white text-center">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">هل لديكم أسئلة أو اقتراحات؟</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">فريق أكاديمية منارات دائماً في خدمتكم للإجابة على جميع استفساراتكم حول التسجيل والدراسة.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://api.whatsapp.com/send?phone=00905312457730" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl">
                <span>تواصل معنا عبر واتساب</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.215.324-1.113 4.054 4.13-1.082.352.214z"/>
                </svg>
              </a>
              <a href="#/register" className="bg-brand-yellow text-brand-dark px-10 py-5 rounded-2xl text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105">
                سجل الآن في الأكاديمية
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Elements */}
      <div className="fixed bottom-6 left-6 z-50">
        <a href="https://api.whatsapp.com/send?phone=00905312457730" target="_blank" rel="noreferrer" className="block p-4 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce-slow">
           <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
             <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.215.324-1.113 4.054 4.13-1.082.352.214z"/>
           </svg>
        </a>
      </div>

      <SmartAssistant />
    </div>
  );
};

export default App;

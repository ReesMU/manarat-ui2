
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t-4 border-brand-yellow">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right">
          <div className="space-y-4">
            <a href="/">
              <img className="h-16 w-auto mb-4 bg-white/5 p-2 rounded" src="https://manaratacademy.com/wp-content/uploads/2022/03/لوكو-منارات-2.png" alt="Logo" />
            </a>
            <p className="text-gray-300 leading-relaxed text-sm">
              الدراسة في أكاديمية منارات هي استثمار من نوع آخر حيث أن الإنسان يستثمر في نفسه ويطور منها بعلوم السايكولوجي والوعي.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider border-r-4 border-brand-yellow pr-3">روابط هامة</h3>
            <ul className="space-y-2">
              {['آخر المقالات', 'كن مدرساً معنا', 'الملف الشخصي', 'أشترك معنا'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center">
                    <span className="ml-2 text-brand-yellow font-bold">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-r-4 border-brand-yellow pr-3">تواصل معنا</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 ml-3 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z" clip-rule="evenodd" />
                </svg>
                <span>TURKEY – yalova</span>
              </li>
              <li className="flex items-start">
                 <svg className="w-5 h-5 mt-1 ml-3 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 004.7.9 1 1 0 011 1V21a1 1 0 01-1 1A19 19 0 012 3a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.9 4.7 1 1 0 01-.27 1.11z"/>
                 </svg>
                 <span dir="ltr">+905312457730</span>
              </li>
              <li className="flex items-start">
                 <svg className="w-5 h-5 mt-1 ml-3 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                 </svg>
                 <span>info@manaratacademy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-black/20 py-6 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} أكاديمية منارات. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
             <a href="https://www.facebook.com/manaromran111" className="text-gray-400 hover:text-brand-yellow transition-colors">Facebook</a>
             <a href="https://t.me/+HMLiivRWcf85OGM0" className="text-gray-400 hover:text-brand-yellow transition-colors">Telegram</a>
             <a href="https://www.instagram.com/manarmomran/" className="text-gray-400 hover:text-brand-yellow transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

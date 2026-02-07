import React from 'react';
import { Program } from './types';

// 1. البيانات الاحتياطية (تظهر فقط إذا كان موقعك في حالة صيانة)
const FALLBACK_PROGRAMS: Program[] = [
  {
    id: 'star-gates',
    title: 'الكورس العملاق البوابات النجمية',
    titleEn: 'Star Gates Mega Course',
    price: 666,
    duration: '10 أسابيع',
    studentsCount: 30,
    image: 'https://i0.wp.com/manaratacademy.com/wp-content/uploads/2025/06/%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%AC%D9%85%D9%8A%D8%A9-500x300.webp',
    category: 'master'
  }
];

// 2. وظيفة جلب البيانات الحقيقية من ووردبريس (API)
export const getLivePrograms = async (): Promise<Program[]> => {
  try {
    // نقوم بطلب البيانات من موقع منارات مباشرة
    const response = await fetch('https://manaratacademy.com/wp-json/wp/v2/posts?per_page=10');
    if (!response.ok) throw new Error('Network response was not ok');
    
    const wpData = await response.json();

    // تحويل بيانات ووردبريس لتناسب شكل الواجهة الجديدة (Mapping)
    return wpData.map((post: any) => ({
      id: post.id.toString(),
      title: post.title.rendered,
      titleEn: post.slug, // نستخدم الرابط اللطيف كعنوان إنجليزي مؤقت
      price: 0, // السعر يحتاج إعداد خاص من إضافة الـ LMS
      duration: 'متوفر الآن',
      studentsCount: Math.floor(Math.random() * 100), // رقم تجريبي لعدد الطلاب
      image: post.jetpack_featured_media_url || FALLBACK_PROGRAMS[0].image,
      category: 'short-course'
    }));
  } catch (error) {
    console.error("خطأ في جلب بيانات ووردبريس، سيتم عرض البيانات الاحتياطية:", error);
    return FALLBACK_PROGRAMS;
  }
};

// 3. روابط القائمة (تبقى ثابتة لضمان التنقل السريع)
export const NAV_LINKS = [
  { label: 'الرئيسية', href: '#/' },
  { label: 'عن الاكاديمية', subItems: [
    { label: 'المدرسين', href: '#/instructors' },
    { label: 'اتصل بنا', href: '#/contact' },
  ]},
  { label: 'الدليل التعليمي', href: '#/guide' },
  { label: 'جميع الكورسات', href: '#/courses' },
  { label: 'تسويق الكتروني', href: '#/marketing' },
  { label: 'أشترك معنا', href: '#/pricing' },
  { label: 'التسجيل', href: '#/register' },
];

// تصدير البيانات القديمة مؤقتاً لضمان عدم حدوث خطأ في التشغيل الأول
export const PROGRAMS = FALLBACK_PROGRAMS;

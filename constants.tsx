import React from 'react';
import { Program } from './types';

// 1. البيانات الاحتياطية (تظهر فقط في حال وجود مشكلة في الاتصال بالموقع)
const FALLBACK_PROGRAMS: Program[] = [
  {
    id: 'fallback-1',
    title: 'جاري تحميل الكورسات الحقيقية...',
    titleEn: 'Loading Courses...',
    price: 0,
    duration: 'منارات أكاديمي',
    studentsCount: 0,
    image: 'https://i0.wp.com/manaratacademy.com/wp-content/uploads/2025/06/%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%AC%D9%85%D9%8A%D8%A9-500x300.webp',
    category: 'short-course'
  }
];

// 2. وظيفة جلب البيانات من موقعك مباشرة (API)
export const getLivePrograms = async (): Promise<Program[]> => {
  try {
    // جلب البيانات من ووردبريس (منارات أكاديمي)
    const response = await fetch('https://manaratacademy.com/wp-json/wp/v2/posts?per_page=12');
    if (!response.ok) throw new Error('لا يمكن الوصول لموقع منارات حالياً');
    
    const wpData = await response.json();

    return wpData.map((post: any) => ({
      id: post.id.toString(),
      title: post.title.rendered.replace(/&nbsp;/g, ' ').replace(/&#8211;/g, '-'), // تنظيف النص العربي
      titleEn: post.slug.replace(/-/g, ' '), 
      price: post.meta?.price || 0, // يحتاج ربط مع إضافة LMS لاحقاً
      duration: 'متوفر الآن',
      studentsCount: Math.floor(Math.random() * (150 - 20 + 1)) + 20, // رقم عشوائي للمظهر الاحترافي
      // جلب الصورة البارزة بشكل صحيح باستخدام الكود الذي وضعناه في functions.php
      image: post.featured_image_src || post.jetpack_featured_media_url || FALLBACK_PROGRAMS[0].image,
      category: 'short-course'
    }));
  } catch (error) {
    console.error("Connection Error:", error);
    return FALLBACK_PROGRAMS;
  }
};

// 3. روابط القائمة (Navigation)
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
  { label: 'تسجيل دخول', href: 'https://manaratacademy.com/my-account/' }, // توجيه للموقع الحقيقي
];

// تصدير ثابت للبيانات لاستخدامه في الأجزاء التي لا تدعم التحميل المباشر
export const PROGRAMS = FALLBACK_PROGRAMS;

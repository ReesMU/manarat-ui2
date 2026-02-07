
import React from 'react';
import { Program } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'star-gates',
    title: 'الكورس العملاق البوابات النجمية',
    titleEn: 'Star Gates Mega Course',
    price: 666,
    duration: '10 أسابيع',
    studentsCount: 30,
    image: 'https://i0.wp.com/manaratacademy.com/wp-content/uploads/2025/06/%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%AC%D9%85%D9%8A%D8%A9-500x300.webp',
    category: 'master'
  },
  {
    id: 'psychology-manar',
    title: 'السايكولوجي – منار عمران',
    titleEn: 'Psychology by Manar Omran',
    price: 99,
    duration: '10 أسابيع',
    studentsCount: 82,
    image: 'https://i0.wp.com/manaratacademy.com/wp-content/uploads/2022/03/%D8%B3%D8%A7%D9%8A%D9%83%D9%88%D9%84%D9%88%D8%AC%D9%8A-500x300.png',
    category: 'bachelor'
  },
  {
    id: 'etiquette-protocol',
    title: 'اتيكيت وبروتكول دولي',
    titleEn: 'International Etiquette & Protocol',
    price: 25,
    duration: '2 أسبوع',
    studentsCount: 32,
    image: 'https://i0.wp.com/manaratacademy.com/wp-content/uploads/2022/08/%D8%B3%D8%A7%D9%8A%D9%83%D9%88%D9%84%D9%88%D8%AC%D9%8A-500x300.png',
    category: 'short-course'
  },
  {
    id: 'photography-lvl1',
    title: 'التصوير الفوتوغرافي – المستوى الاول',
    titleEn: 'Photography Level 1',
    price: 50,
    duration: '4 أسابيع',
    studentsCount: 41,
    image: 'https://i0.wp.com/manaratacademy.com/wp-content/uploads/2022/11/%D8%B3%D8%A7%D9%8A%D9%83%D9%88%D9%84%D9%88%D8%AC%D9%8A-3-500x300.png',
    category: 'short-course'
  },
  {
    id: 'graphic-design',
    title: 'الجرافيك ديزاين – مدخل الى عالم التصميم',
    titleEn: 'Graphic Design Intro',
    price: 100,
    duration: '10 أسابيع',
    studentsCount: 15,
    image: 'https://i0.wp.com/manaratacademy.com/wp-content/uploads/2023/01/%D8%B3%D8%A7%D9%8A%D9%83%D9%88%D9%84%D9%88%D8%AC%D9%8A-1-1-500x300.png',
    category: 'short-course'
  }
];

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

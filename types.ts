
export interface Program {
  id: string;
  title: string;
  titleEn: string;
  price: number;
  duration: string;
  studentsCount: number;
  image: string;
  category: 'bachelor' | 'master' | 'phd' | 'higher-diploma' | 'short-course';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum DegreeType {
  BACHELOR = 'بكالوريوس',
  MASTER = 'ماجستير',
  PHD = 'دكتوراه',
  DIPLOMA = 'دبلوم عالي',
  SHORT_COURSE = 'دورة سريعة'
}

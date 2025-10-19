import { Book } from '@/types';

export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'شاهنامه',
    author: 'فردوسی',
    description: 'حماسه ملی ایران',
    category: 'حماسی',
    rating: 5,
    publishedYear: 1010
  },
  {
    id: '2', 
    title: 'بوف کور',
    author: 'صادق هدایت',
    description: 'رمان نمادین مدرن',
    category: 'ادبیات',
    rating: 4,
    publishedYear: 1937
  },
  {
    id: '3',
    title: 'ملت عشق',
    author: 'الیف شافاک', 
    description: 'رمان عرفانی',
    category: 'عرفانی',
    rating: 4,
    publishedYear: 2010
  }
];
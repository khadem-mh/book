"use client"

import { Book } from '@/types';
import { Button, Divider } from '@heroui/react';
import { FaStar } from 'react-icons/fa';
import { LuBookOpenText, LuCalendarClock } from 'react-icons/lu';
import { MdSignalCellularAlt } from 'react-icons/md';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {

  const levelMap: Record<string, string> = {
    beginner: "مبتدی",
    intermediate: "متوسط",
    advanced: "پیشرفته",
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col gap-6 items-center">
      <img src={book.cover} alt="cover" className='w-60 rounded-xl' />
      <div className='w-full px-14'>
        <Divider className='bg-slate-200' />
      </div>
      <div className=''>
        <div className="flex flex-col flex-1 text-right">
          {/* عنوان و نویسنده */}
          <h3 className="w-ful flex flex-col items-center gap-2">
            <p className='text-xl font-bold'>کتاب {book.title}</p>
          </h3>

          {/* توضیحات کوتاه */}
          {book.description && (
            <p className="text-sm text-gray-500 mt-3 line-clamp-3">{book.description}</p>
          )}

          {/* نویسنده‌ها */}
          <div className='flex items-center justify-between mt-4'>
            <p className='text-slate-600 text-sm'>نویسندگان</p>
            <div className="flex items-center gap-4">
              {book.authors.map((author) => (
                <div key={author.name} className="flex items-center gap-1.5">
                  <img
                    src={author.cover}
                    alt={author.name}
                    className="w-6.5 h-6.5 rounded-lg object-cover border border-gray-200"
                  />
                  <span className="text-gray-600 text-sm">{author.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <p className='text-slate-600 text-sm'>امتیاز</p>
            <div className="w-fit flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar className='text-yellow-500' />
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {/** سال انتشار */}
            <div className="flex-1 min-w-32 w-fit h-fit px-4 py-2 flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-gray-500">
                <LuCalendarClock size={18} />
                <span>سال انتشار</span>
              </div>
              <span className="font-medium text-gray-700">{book.publishedYear}</span>
            </div>

            {/** تعداد صفحات */}
            <div className="flex-1 min-w-32 w-fit h-fit px-4 py-2 flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-gray-500">
                <LuBookOpenText size={18} />
                <span>تعداد صفحات</span>
              </div>
              <span className="mt-1 font-medium text-gray-700">{book.pages}</span>
            </div>

            {/** سطح */}
            <div className="flex-1 min-w-32 w-fit h-fit px-4 py-2 flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-gray-500">
                <MdSignalCellularAlt size={18} />
                <span>سطح</span>
              </div>
              <span className="mt-1 font-medium text-gray-700">{levelMap[book.level]}</span>
            </div>
          </div>

          {/* دکمه مشاهده جزئیات */}
          <div className="mt-4 flex justify-end">
            <Button color='primary' fullWidth variant='flat'>مشاهده جزئیات</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

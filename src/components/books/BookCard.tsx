"use client"

import { Book } from '@/types';
import { Button, Divider } from '@heroui/react';
import { FaStar } from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';
import { LuBookOpenText, LuBrain, LuCalendarRange } from 'react-icons/lu';
import { MdSignalCellularAlt } from 'react-icons/md';
import { TbBrandOpenai, TbFileTextAi } from 'react-icons/tb';

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
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col gap-4 items-center">

      <img src={book.cover} alt="cover" className='w-60 rounded-xl' />

      <div className="flex gap-3 text-sm">
        {/** سال انتشار */}
        <div className="flex-1 min-w-32 w-fit h-fit px-4 flex flex-col items-center">
          <div className="bg-sky-500/6 border border-slate-200 rounded-xl p-2 flex items-center text-gray-500">
            <TbFileTextAi size={22} className='text-sky-700 animate-pulse' />
          </div>
          <span className="mt-1 font-medium text-gray-700">{book.publishedYearAi}</span>
        </div>

        {/** تعداد صفحات */}
        <div className="flex-1 border-r border-l border-slate-200 min-w-32 w-fit h-fit px-4 flex flex-col items-center">
          <div className="bg-black/5 border border-slate-200 rounded-xl p-2 flex items-center text-gray-500">
            <TbBrandOpenai size={22} className='animate-spin text-black/80' style={{ animationDuration: "5500ms" }} />
          </div>
          <span className="mt-1 font-medium text-gray-700">{book.publishedPages} صفحه</span>
        </div>

        {/** سطح */}
        <div className="flex-1 min-w-32 w-fit h-fit px-4 flex flex-col items-center">
          <div className="bg-yellow-500/10 border border-slate-200 rounded-xl p-2 flex items-center text-gray-500">
            <LuBrain size={22} className='text-yellow-600 animate-bounce' style={{ animationDuration: "1500ms" }} />
          </div>
          <span className="mt-1 font-medium text-gray-700">ساده</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 text-right bg-slate-50 rounded-2xl p-4">
        {/* عنوان و نویسنده */}
        <h3 className="w-ful flex flex-col items-center gap-2 rounded-xl">
          <p className='text-2xl font-[Lalezar] text-gray-600'>کتاب {book.titleFa}</p>
          <p
            style={{
              background: "linear-gradient(to right, gray 50%, black 50%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 100%",
              animation: "shine 8s linear infinite",
              fontFamily: "Exo_2"
            }}
            className='text-center'
          >
            {book.title}
            <br />
            <span>With Ai</span>
          </p>
        </h3>

        {/* توضیحات کوتاه */}
        {book.description && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-3">{book.description}</p>
        )}

        <div className='flex items-center justify-between mt-2'>
          <p className='text-slate-600 text-sm font-[Lalezar]'>امتیاز</p>
          <div className="w-fit flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar className='text-yellow-500' />
            ))}
          </div>
        </div>

        {/* نویسنده‌ها */}
        <div className='flex items-center justify-between mt-4'>
          <p className='text-slate-600 text-sm font-[Lalezar]'>نویسندگان</p>
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
      </div>

      <Button color='primary' fullWidth className='animated-gradient text-md border border-dashed border-[#D0E4FA]' variant='flat' endContent={<HiArrowLeft />}>بزن بریم</Button>
    </div>
  );
}

"use client"

import { Button } from '@heroui/react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { LuBrain } from 'react-icons/lu';
import { TbBrandOpenai, TbFileTextAi } from 'react-icons/tb';
import RatingStars from './RatingStars';

interface BookCardProps {
  book: any;
}

export default function BookCard({ book }: BookCardProps) {

  return (
    <div className="bg-white shadow-[0_0_10px_#e5e5e5] rounded-2xl p-4 flex flex-col gap-4 items-center">

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
        </h3>

        {/* توضیحات کوتاه */}
        {book.description && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-3">{book.description}</p>
        )}

        <RatingStars rating={book.rating ?? 0} />

        {/* نویسنده‌ها */}
        <div className='flex items-center justify-between mt-4'>
          <p className='text-slate-600 text-sm font-[Lalezar]'>نویسندگان</p>
          <div className="flex items-center gap-4">
            {book.authors.map((author: any) => (
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

      <div className='w-full px-6'>
        <Button as={Link} href={`/books/${book.slug}`} fullWidth className='border-slate-300 text-md rounded-xl hover:animate-appearance-in' variant='bordered' startContent={<FiArrowUpRight className='text-xl animate-bounce' />}>
          <p className='text-center animated-text'>
            {book.title}
          </p>
        </Button>
      </div>
    </div>
  );
}

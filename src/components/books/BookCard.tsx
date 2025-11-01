"use client"

import { Button } from '@heroui/react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { LuBrain } from 'react-icons/lu';
import { TbBrandOpenai, TbFileTextAi } from 'react-icons/tb';
import RatingStars from './RatingStars';

interface BookCardProps {
  book: any;
}

export default function BookCard({ book }: BookCardProps) {

  return (
    <Link href={`/books/${book.slug}`}>
      <div className="bg-white shadow-[0_0_10px_#e5e5e5] hover:shadow-none border border-slate-200 transition-shadow duration-500 hover:animate-appearance-in rounded-2xl px-2 py-4 xl:p-4 flex flex-col gap-4 items-center">
        <div className='w-full flex flex-row lg:flex-col xl:flex-row items-center justify-center'>
          <img src={book.cover} alt="cover" className='w-60 floating-image rounded-2xl border border-slate-200' />

          <div className="flex md:flex-col border lg:border-0 xl:border border-r-0 lg:flex-row xl:flex-col floating-box gap-4 lg:gap-0 xl:gap-4 mt-4 xl:mt-0 border-slate-200 rounded-l-2xl rounded-r-0 py-4 text-sm">
            {/** سال انتشار */}
            <div className="flex-1 min-w-28 w-fit h-fit flex flex-col items-center">
              <div className="bg-sky-500/6 border border-slate-200 rounded-xl p-2 flex items-center text-gray-500">
                <TbFileTextAi size={22} className='text-sky-700 animate-pulse' />
              </div>
              <span className="mt-1 font-medium text-gray-700">{book.publishedYearAi}</span>
            </div>

            {/** تعداد صفحات */}
            <div className="flex-1 lg:border-x xl:border-0 border-slate-200 min-w-28 w-fit h-fit flex flex-col items-center">
              <div className="bg-black/5 border border-slate-200 rounded-xl p-2 flex items-center text-gray-500">
                <TbBrandOpenai size={22} className='animate-spin text-black/80' style={{ animationDuration: "5500ms" }} />
              </div>
              <span className="mt-1 font-medium text-gray-700">{book.publishedPages} صفحه</span>
            </div>

            {/** سطح */}
            <div className="flex-1 min-w-28 w-fit h-fit flex flex-col items-center">
              <div className="bg-yellow-500/10 border border-slate-200 rounded-xl p-2 flex items-center text-gray-500">
                <LuBrain size={22} className='text-yellow-600 animate-bounce' style={{ animationDuration: "1500ms" }} />
              </div>
              <span className="mt-1 font-medium text-gray-700">ساده</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 lg:-mt-6 xl:mt-0 text-right rounded-2xl p-4">
          <p className='text-2xl w-full text-center font-[Lalezar] text-gray-700 mb-2'>{book.titleFa}</p>
          <p className="text-sm text-gray-500 mt-1 line-clamp-3">{book.description}</p>

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
                  <span className="text-gray-600 text-sm lg:hidden xl:flex">{author.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full xl:px-6'>
          <Button fullWidth className='border-slate-100 text-md rounded-xl' variant='bordered' startContent={<FiArrowUpRight className='text-xl animate-bounce' />}>
            <p className='text-center animated-text truncate'>
              {book.title}
            </p>
          </Button>
        </div>
      </div>
    </Link>
  );
}

import { Book } from '@/types';
import Book3D from './Book3D';
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
    <div className="bg-white shadow-[0_0_10px_lightgray] rounded-xl p-4 flex flex-col gap-6 items-center">
      {/* کتاب سه‌بعدی */}
      <Book3D book={book} />

      <div className='mt-2'>
        <div className="flex flex-col flex-1 text-right">
          {/* عنوان و نویسنده */}
          <h3 className="w-ful flex flex-col items-center gap-2">
            <p className='text-xl font-bold'>{book.title}</p>
            <p className="font-normal text-gray-500">{book.titleEn}</p>
          </h3>

          {/* توضیحات کوتاه */}
          {book.description && (
            <p className="text-sm text-gray-500 mt-3 line-clamp-3">{book.description}</p>
          )}

          <div className="mt-4 flex gap-3 text-sm">
            {/** سال انتشار */}
            <div className="min-w-32 w-fit h-fit px-4 py-2 flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-gray-500">
                <LuCalendarClock size={18} />
                <span>سال انتشار</span>
              </div>
              <span className="font-medium text-gray-700">{book.publishedYear}</span>
            </div>

            {/** تعداد صفحات */}
            <div className="min-w-32 w-fit h-fit px-4 py-2 flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-gray-500">
                <LuBookOpenText size={18} />
                <span>تعداد صفحات</span>
              </div>
              <span className="mt-1 font-medium text-gray-700">{book.pages}</span>
            </div>

            {/** سطح */}
            <div className="min-w-32 w-fit h-fit px-4 py-2 flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-gray-500">
                <MdSignalCellularAlt size={18} />
                <span>سطح</span>
              </div>
              <span className="mt-1 font-medium text-gray-700">{levelMap[book.level]}</span>
            </div>
          </div>


          {/* نویسنده‌ها */}
          <div className="flex flex-wrap gap-2 mt-2">
            {book.authors.map((author) => (
              <div key={author.name} className="flex items-center gap-1">
                <img
                  src={author.cover}
                  alt={author.name}
                  className="w-6 h-6 rounded-full object-cover border border-gray-200"
                />
                <span className="text-gray-600 text-sm">{author.name}</span>
              </div>
            ))}
          </div>

          {/* دسته‌بندی + رتبه */}
          <div className="flex justify-between items-center mt-4">
            <span className="badge badge-outline">{book.category.name}</span>
            <div className="rating rating-sm">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                  checked={i < Math.round(book.rating)}
                  readOnly
                />
              ))}
            </div>
          </div>

          {/* دکمه مشاهده جزئیات */}
          <div className="mt-4 flex justify-end">
            <button className="btn btn-primary btn-sm">مشاهده جزئیات</button>
          </div>
        </div>
      </div>
    </div>
  );
}

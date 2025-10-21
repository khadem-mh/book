import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow rounded-2xl overflow-hidden">
      {/* تصویر جلد */}
      <div className="relative w-full h-48">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="card-body p-4">
        {/* عنوان فارسی + انگلیسی */}
        <h3 className="card-title text-lg font-bold flex flex-col">
          {book.title}
          <span className="text-sm font-normal text-gray-400">{book.titleEn}</span>
        </h3>

        {/* نویسنده‌ها */}
        <div className="flex items-center mt-2 space-x-2 rtl:space-x-reverse">
          {book.authors.map((author) => (
            <div key={author.name} className="flex items-center space-x-1 rtl:space-x-reverse">
              <img
                src={author.cover}
                alt={author.name}
                className="w-6 h-6 rounded-full object-cover border border-gray-200"
              />
              <span className="text-sm text-gray-600">{author.name}</span>
            </div>
          ))}
        </div>

        {/* توضیحات کوتاه */}
        {book.description && (
          <p className="text-sm text-gray-500 mt-2 line-clamp-3">
            {book.description}
          </p>
        )}

        {/* دسته‌بندی + رتبه */}
        <div className="flex justify-between items-center mt-3">
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
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">مشاهده جزئیات</button>
        </div>
      </div>
    </div>
  );
}

import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body">
        <h3 className="card-title text-lg">{book.title}</h3>
        <p className="text-gray-600">نویسنده: {book.author}</p>
        {book.description && (
          <p className="text-sm text-gray-500">{book.description}</p>
        )}
        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-outline">{book.category}</span>
          <div className="rating rating-sm">
            {[...Array(5)].map((_, i) => (
              <input 
                key={i}
                type="radio" 
                className="mask mask-star-2 bg-orange-400" 
                checked={i < book.rating}
                readOnly
              />
            ))}
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">مشاهده جزئیات</button>
        </div>
      </div>
    </div>
  );
}
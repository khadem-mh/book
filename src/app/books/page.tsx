"use client";

import { sampleBooks } from "@/lib/data";
import BookCard from "@/components/books/BookCard";

const Books = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">کتاب‌ها</h1>

      {/* گرید کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

"use client";

import { books } from "@/lib/books";
import BookCard from "@/components/books/BookCard";

const Books = () => {
  return (
    <div className="px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 py-10">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

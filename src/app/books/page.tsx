"use client";

import { books } from "@/lib/books";
import BookCard from "@/components/books/BookCard";
import BookFilter from "@/components/books/BookFilter";
import { useSearchParams } from "next/navigation";

const Books = () => {
  const searchParams = useSearchParams();

  const q = searchParams.get("q")?.toLowerCase() ?? "";
  const language = searchParams.get("language") ?? "";
  const level = searchParams.get("level") ?? "";
  const author = searchParams.get("author") ?? "";
  const minYear = searchParams.get("minYear") ?? "";
  const maxYear = searchParams.get("maxYear") ?? "";

  const filteredBooks = books.filter((book) => {
    const matchesQuery =
      !q ||
      book.title.toLowerCase().includes(q) ||
      book.titleFa?.toLowerCase().includes(q) ||
      book.authors.some((a) =>
        a.name.toLowerCase().includes(q) ||
        a.enName.toLowerCase().includes(q)
      );

    const matchesLang = !language || book.language === language;
    const matchesLevel = !level || book.level === level;
    const matchesAuthor =
      !author ||
      book.authors.some(
        (a) =>
          a.name.toLowerCase() == author.toLowerCase() ||
          a.enName.toLowerCase() == author.toLowerCase()
      );

    const matchesMinYear = !minYear || book.publishedYear >= Number(minYear);
    const matchesMaxYear = !maxYear || book.publishedYear <= Number(maxYear);
    
    return (
      matchesQuery &&
      matchesLang &&
      matchesLevel &&
      matchesAuthor &&
      matchesMinYear &&
      matchesMaxYear
    );
  });

  return (
    <div className="px-6">
      <BookFilter books={books} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 py-10">
        {filteredBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

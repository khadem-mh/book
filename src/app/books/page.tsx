"use client";

import BookCard from "@/components/books/BookCard";
import BookFilter from "@/components/books/BookFilter";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import BookSort from "@/components/books/BookSort";
import { books } from "@/lib/data/books";

const Books = () => {
  const searchParams = useSearchParams();

  const categories = searchParams.get("categories") ? searchParams.get("categories")!.split(",") : [];
  const q = searchParams.get("q")?.toLowerCase() ?? "";
  const level = searchParams.get("level") ?? "";
  const author = searchParams.get("author") ?? "";
  const minYear = searchParams.get("minYear") ?? "";
  const maxYear = searchParams.get("maxYear") ?? "";
  const sort = searchParams.get("sort") ?? ""; // ex: "publishedYear:desc"


   const filteredBooks = books.filter((book) => {
    const matchesQuery =
      !q ||
      book.title.toLowerCase().includes(q) ||
      book.titleFa?.toLowerCase().includes(q) ||
      book.authors.some((a) =>
        a.name.toLowerCase().includes(q) ||
        a.enName.toLowerCase().includes(q)
      );

    const matchesCategory = categories.length === 0 || (book.categories || []).some(c => categories.includes(c));
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
      matchesLevel &&
      matchesAuthor &&
      matchesMinYear &&
      matchesMaxYear &&
      matchesCategory
    );
  });

  // apply sorting based on sort param
  const sortedBooks = useMemo(() => {
    if (!sort) return filteredBooks;

    const [field, dir] = sort.split(":");
    const direction = dir === "asc" ? 1 : -1;

    const copy = [...filteredBooks];

    copy.sort((a, b) => {
      const av: any = (a as any)[field];
      const bv: any = (b as any)[field];

      // handle empty/undefined
      if (av === undefined && bv === undefined) return 0;
      if (av === undefined) return -1 * direction;
      if (bv === undefined) return 1 * direction;

      // number compare
      if (typeof av === "number" || typeof bv === "number") {
        return (Number(av) - Number(bv)) * direction;
      }

      // fallback to string compare
      return String(av).localeCompare(String(bv)) * direction;
    });

    return copy;
  }, [filteredBooks, sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 flex gap-6">
      <BookFilter books={books} />
      
      <div>
        <BookSort />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 py-10">
          {sortedBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;

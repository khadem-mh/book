"use client";

import { books } from "@/lib/books";
import BookCard from "@/components/books/BookCard";
import { Card, CardBody } from "@heroui/react";

const Books = () => {
  return (
    <Card className="shadow-none p-6">
      <h1 className="text-2xl font-bold mb-6">کتاب‌ها</h1>

      <CardBody className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </CardBody>
    </Card>
  );
};

export default Books;

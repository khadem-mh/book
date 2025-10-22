"use client";

import { sampleBooks } from "@/lib/data";
import BookCard from "@/components/books/BookCard";
import { Card, CardBody } from "@heroui/react";

const Books = () => {
  return (
    <Card className="shadow-none">
      <h1 className="text-2xl font-bold mb-6">کتاب‌ها</h1>

      <CardBody className="grid grid-cols-2 py-10">
        {sampleBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </CardBody>
    </Card>
  );
};

export default Books;

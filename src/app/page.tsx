"use client"

import { Button, Card, CardBody } from "@heroui/react";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">کتابخانه من با Hero UI 📚</h1>
      
      <div className="flex gap-4 mb-6">
        <Button color="primary">کتاب‌های جدید</Button>
        <Button color="secondary">دسته‌بندی‌ها</Button>
        <Button variant="bordered">جستجو</Button>
      </div>

      <Card className="max-w-md">
        <CardBody>
          <p>اولین کارت با Hero UI! 🎉</p>
        </CardBody>
      </Card>
    </div>
  );
}
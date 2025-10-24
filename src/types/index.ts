// ✅ types/book.ts

export type Author = {
  name: string;
  enName?: string;
  cover?: string;
};

export type BookMeta = {
  slug: string;
  title: string;
  titleFa?: string;
  subTitle?: string;
  authors: Author[];
  cover?: string;
  pages?: number;
  language?: string;
  languageFa?: string;
  publishedYear?: number;
  level?: "beginner" | "intermediate" | "advanced";
  tags?: string[];
  description?: string;
  licenseNote?: string;
  publishedPages?: number;
  createdAt?: string;
};

// کارت مفهومی یا آموزشی
export type Card = {
  id: string;
  type?: "concept" | "term" | "practice" | "example" | "question";
  front: string;
  back: string;
  examples?: string[];
  exampleCode?: string | null;
  conclusion?: string;
  tags?: string[];
  difficulty?: "easy" | "medium" | "hard";
  reviewed?: boolean;
};

// فایل مربوط به هر صفحه از کتاب
export type PageFile = {
  page: number;
  title?: string;
  titleFa?: string;
  summary?: string;
  cards: Card[];
};

// فایل مربوط به مقدمه‌ی کتاب
export type PrefaceFile = {
  title?: string;
  titleFa?: string;
  blocks: Card[]; // می‌تونه در آینده PrefaceBlock خاص خودش هم بشه
};

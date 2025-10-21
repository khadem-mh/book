export type Book = {
  id: string;
  title: string;
  titleEn: string;
  subTitle: string;
  authors: {
    name: string;
    cover: string;
  }[];
  description: string;
  category: {
    name: string;
    slug: string;
  };
  rating: number;
  cover: string;
  publishedYear: number;
  level: "beginner" | "intermediate" | "advanced";
  pages: number;
  aiSummary: string;
  topics: string[];
  quote: string;
};

export interface Book {
  id: string;
  title: string;
  author: string;
  description?: string;
  category: string;
  rating: number;
  publishedYear?: number;
}

export interface BookFilters {
  category?: string;
  search?: string;
  minRating?: number;
}
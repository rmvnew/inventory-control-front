import { Product } from "./product.model";


export interface Category {
  id_category: number;
  name: string;
  isActive: boolean;
  createAt: Date;
  updateAt: Date;
  product: Product[];
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface CategoryResponse {
  items: Category[];
  meta: Meta;
}




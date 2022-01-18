


export class CategoryRequest {
  name:string = ''
}

export interface CategoryResponse {
  id_category: number;
  name: string;
  isActive: boolean;
  createAt: Date;
  updateAt: Date;
}
// ###########
export interface Item {
  id_category: number;
  name: string;
  isActive: boolean;
  createAt: Date;
  updateAt: Date;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface CategoryPaginateResponse {
  items: Item[];
  meta: Meta;
}






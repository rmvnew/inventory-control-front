


export interface Product {
  id_product: number;
  name: string;
  barcode: string;
  part_number: string;
  model: string;
  condition: string;
  quantity: number;
  minimum_quantity: number;
  value: string;
  responsible: string;
  location: string;
  institute_code: string;
  isActive: boolean;
  createAt: Date;
  updateAt: Date;
  invoice: Invoice;
  category: Category;
}

export interface Invoice {
  id_invoice: number;
  invoice_number: string;
  invoice_date: Date;
  invoice_issuer: string;
  issuer_register: string;
  value: string;
  isActive: boolean;
  createAt: Date;
  updateAt: Date;
}

export interface Category {
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

export interface ProductResponse {
  items: Product[];
  meta: Meta;
}


//create

export interface ProductRequestCreate {

        id_invoice: number;
        id_category: number;
        id_department: number;
        name: string;
        barcode: string;
        part_number: string;
        model: string;
        condition: string;
        quantity: number;
        minimum_quantity: number;
        value: number;
        responsible: string;
        location: string;
        institute_code: string;
    }






export interface ProductResponseCreate {
  id_product: number;
  name: string;
  barcode: string;
  part_number: string;
  model: string;
  condition: string;
  quantity: number;
  minimum_quantity: number;
  value: string;
  responsible: string;
  location: string;
  institute_code: string;
  isActive: boolean;
  createAt: Date;
  updateAt: Date;
}













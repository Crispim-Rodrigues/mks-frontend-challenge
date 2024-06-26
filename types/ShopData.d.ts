export interface ProductData {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createAt: string;
  updateAt: string;
  quantity: number;
}
export interface ProductResponse {
  products: ProductData[];
}

export interface CartAction {
  type: string;
  item?: ProductData;
}

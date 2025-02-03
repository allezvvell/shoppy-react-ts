export interface CartProduct {
  id: string;
  qty: number;
}

export interface CartType {
  [key: string]: CartProduct;
}

export interface CartItem {
  price: number;
  title: string;
  id: string;
  image: string;
  qty: number;
}

import { ProductResponse, CartAction } from "@/types/ShopData";
import React from "react";

export const initialState: ProductResponse = { products: [] };

export const CartContext = React.createContext<{
  state: ProductResponse;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

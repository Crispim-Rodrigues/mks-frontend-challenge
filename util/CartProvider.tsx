'use client'
import React, { useReducer } from "react";
import { CartContext, initialState } from "@/contexts/cartContex";
import { CartAction, ProductResponse } from "@/types/ShopData";

function cartReducer(
  state: ProductResponse,
  action: CartAction
): ProductResponse {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, products: [...state.products, action.item!] };
    case "REMOVE_ITEM":
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.item?.id),
      };
    default:
      return state;
  }
}
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

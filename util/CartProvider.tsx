"use client";
import React, { useReducer } from "react";
import { CartContext, initialState } from "@/contexts/cartContex";
import { CartAction, ProductResponse } from "@/types/ShopData";

function cartReducer(
  state: ProductResponse,
  action: CartAction
): ProductResponse {
  switch (action.type) {
    case "ADD_ITEM":
      const itemExists = state.products.find(
        (item) => item.id === action.item?.id
      );
      if (itemExists) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.item?.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.item!, quantity: 1 }],
        };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.item?.id),
      };
    case "REMOVE_SINGLE_ITEM":
      return {
        ...state,
        products: state.products
          .map((item) =>
            item.id === action.item?.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
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

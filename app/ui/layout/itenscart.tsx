import React, { useContext, useState } from "react";
import styles from "./itenscart.module.scss";
import Image from "next/image";
import { CartContext } from "@/contexts/cartContex";
import { ProductData } from "@/types/ShopData";

export default function Itemcard() {
  const { state, dispatch } = useContext(CartContext);
  const { products } = state;
  const deleteToCart = (item: ProductData) => {
    dispatch({ type: "REMOVE_ITEM", item });
  };
  const addToCart = (item: ProductData) => {
    dispatch({ type: "ADD_ITEM", item });
  };
  const removeSingleToCart = (item: ProductData) => {
    dispatch({ type: "REMOVE_SINGLE_ITEM", item });
  };
  return (
    <div className={styles.itens}>
      {products.map((item, index) => (
        <div className={styles.card} key={index}>
          <Image src={item.photo} alt="alt" width={500} height={500} />
          <span className={styles.description}>{item.name}</span>
          <div className={styles.subflex}>
            <div className={styles.input}>
              <span>Qtd:</span>
              <button onClick={()=>removeSingleToCart(item)}>−</button>
              <input type="text" value={item.quantity} />
              <button onClick={()=>addToCart(item)}>+</button>
            </div>
            <span className={styles.price}>{item.price}</span>
            <button
              className={styles.close}
              onClick={() => deleteToCart(item)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import styles from "./itenscart.module.scss";
import Image from "next/image";
export default function Itemcard() {
  return (
    <div className={styles.itens}>
      <div className={styles.card}>
        <Image
          src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp"
          alt="alt"
          width={500}
          height={500}
        />
        <span className={styles.description}>
          Apple Iphone
          <br />
          XI 128G
        </span>
        <div className={styles.subflex}>
          <div className={styles.input}>
            <span>Qtd:</span>
            <button>−</button>
            <input type="text" defaultValue={"0"} />
            <button>+</button>
          </div>
          <span className={styles.price}>R$300</span>
          <button className={styles.close}>X</button>
        </div>
      </div>
      <div className={styles.total}>
        <span>Total:</span>
        <span>R$798</span>
      </div>
    </div>
  );
}

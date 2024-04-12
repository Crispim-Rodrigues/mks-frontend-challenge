"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import Itemscart from "./itenscart";
import { CartContext } from "@/contexts/cartContex";
const variants = {
  open: { x: 0, display: "flex" },
  closed: { x: "100%", transitionEnd: { display: "none" } },
};
export default function Navbar() {
  const { state } = useContext(CartContext);
  const { products } = state;
  const [isOpen, setIsOpen] = useState(false);
  const total = products.reduce((acc, item) => acc + item.quantity, 0);
  const totalprice = products.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          <h3 className={styles.logo}>
            MKS&nbsp;<span>Sitemas</span>
          </h3>
        </Link>
        <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
          <Image src="Vector.svg" alt="" width={19} height={18}></Image>
          <span>{total}</span>
        </button>
      </div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", stiffness: 500, damping: 60 }}
        className={styles.sidebar}
      >
        <div className={styles.sidecontainer}>
          <div className={styles.sidetitle}>
            <h1>
              Carrinho
              <br /> de compras
            </h1>
            <button onClick={() => setIsOpen(!isOpen)}>X</button>
          </div>
          <Itemscart />
        </div>
        <div className={styles.total}>
          <span>Total:</span>
          <span>R${totalprice}</span>
        </div>
        <div className={styles.buy}>
          <h1>Finalizar Compra</h1>
        </div>
      </motion.div>
    </header>
  );
}

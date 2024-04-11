"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Itemscart from "./itenscart";

const variants = {
  open: { x: 0 },
  closed: { x: "100%" },
};
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
          <span>0</span>
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
          <Itemscart/>
        </div>
        <div className={styles.buy}>
          <h1>Finalizar Compra</h1>
        </div>
      </motion.div>
    </header>
  );
}

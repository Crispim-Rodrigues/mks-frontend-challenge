"use client";
import styles from "./ui/page.module.scss";
import Image from "next/image";
import { useProduct } from "./hooks/useProductData";

export default function Home() {
  const { isPending, error, data } = useProduct();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {!isPending && (
          <>
            {data?.map((data) => (
              <div className={styles.card} key={data.id}>
                <Image
                  src={data.photo}
                  alt="alt"
                  width={500}
                  height={500}
                  className={styles.product}
                />
                <div className={styles.description}>
                  <div className={styles.title}>
                    <h4>{data.name}</h4>
                    <span>{data.price}</span>
                  </div>
                  <span className={styles.subtitle}>
                    {data.description}
                  </span>
                </div>
                <div className={styles.buy}>
                  <Image
                    src="shopping-bag.svg"
                    alt="alt"
                    width={14}
                    height={16}
                  />
                  <h4>COMPRAR</h4>
                </div>
              </div>
            ))}
          </>
        )}

        {isPending && <p>carregando</p>}
      </div>
    </main>
  );
}

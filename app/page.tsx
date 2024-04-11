import styles from "./ui/page.module.scss";
import Image from "next/image";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp"
            alt="alt"
            width={500}
            height={500}
            className={styles.product}
          />
          <div className={styles.description}>
            <div className={styles.title}>
              <h4>Apple IPhone XI 128GB</h4>
              <span>R$300</span>
            </div>
            <span className={styles.subtitle}>Redesigned from scratch and completely revised.</span>
          </div>
          <div className={styles.buy}>
            <Image src="shopping-bag.svg" alt="alt" width={14} height={16} />
            <h4>COMPRAR</h4>
          </div>
        </div>


        <div className={styles.card}>
          <Image
            src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp"
            alt="alt"
            width={500}
            height={500}
            className={styles.product}
          />
          <div className={styles.description}>
            <div className={styles.title}>
              <h4>Apple IPhone XI 128GB</h4>
              <span>R$300</span>
            </div>
            <span className={styles.subtitle}>Redesigned from scratch and completely revised.</span>
          </div>
          <div className={styles.buy}>
            <Image src="shopping-bag.svg" alt="alt" width={14} height={16} />
            <h4>COMPRAR</h4>
          </div>
        </div>


        <div className={styles.card}>
          <Image
            src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp"
            alt="alt"
            width={500}
            height={500}
            className={styles.product}
          />
          <div className={styles.description}>
            <div className={styles.title}>
              <h4>Apple IPhone XI 128GB</h4>
              <span>R$300</span>
            </div>
            <span className={styles.subtitle}>Redesigned from scratch and completely revised.</span>
          </div>
          <div className={styles.buy}>
            <Image src="shopping-bag.svg" alt="alt" width={14} height={16} />
            <h4>COMPRAR</h4>
          </div>
        </div>


        <div className={styles.card}>
          <Image
            src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp"
            alt="alt"
            width={500}
            height={500}
            className={styles.product}
          />
          <div className={styles.description}>
            <div className={styles.title}>
              <h4>Apple IPhone XI 128GB</h4>
              <span>R$300</span>
            </div>
            <span className={styles.subtitle}>Redesigned from scratch and completely revised.</span>
          </div>
          <div className={styles.buy}>
            <Image src="shopping-bag.svg" alt="alt" width={14} height={16} />
            <h4>COMPRAR</h4>
          </div>
        </div>
      </div>
    </main>
  );
}

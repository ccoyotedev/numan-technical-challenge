import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Logo } from "assets/images";

export const Header = () => {
  return (
    <header className={styles["simple-header"]}>
      <Link href="/">
        <a target="_blank" rel="noreferrer">
          <Image src={Logo} alt="Numan logo" height={32} objectFit="contain" />
        </a>
      </Link>
    </header>
  );
};

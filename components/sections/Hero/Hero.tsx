import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "assets/images";
import { Button } from "components/ui/atoms";

interface Props {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: Props) => {
  return (
    <section className={styles["hero-container"]}>
      <Image src={Logo} alt="numan logo" />
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Link href={"/categories"}>
        <a>
          <Button>Get started</Button>
        </a>
      </Link>
    </section>
  );
};

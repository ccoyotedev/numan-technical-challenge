import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "assets/images";
import { Button } from "components/ui";

interface Props {
  title: string;
  subtitle: string;
  href: string;
}

export const Hero = ({ title, subtitle, href }: Props) => {
  return (
    <section className={styles["hero-container"]}>
      <Image src={Logo} alt="numan logo" />
      <h1>{title}</h1>
      <h6>{subtitle}</h6>
      <Link href={href}>
        <a>
          <Button>Get started</Button>
        </a>
      </Link>
    </section>
  );
};

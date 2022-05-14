import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Logo } from "assets/images";
import { Button } from "components/ui";
import { ChevronRight } from "components/svgs";

interface Props {
  to?: string;
  back?: string;
  children: React.ReactNode;
}

export const SimpleNavLayout = ({ to, back, children }: Props) => {
  return (
    <>
      <header className={styles["simple-header"]}>
        <Link href="/">
          <a target="_blank" rel="noreferrer">
            <Image
              src={Logo}
              alt="Numan logo"
              height={32}
              objectFit="contain"
            />
          </a>
        </Link>
      </header>
      <main className={styles["simple-main"]}>{children}</main>
      <footer className={styles["simple-footer"]}>
        {back && (
          <Link href={back}>
            <a>
              <Button secondary>Back</Button>
            </a>
          </Link>
        )}
        <Link href={to || "#"}>
          <a className={!to ? "disabled" : ""}>
            <Button
              wide
              icon={<ChevronRight fill="white" size="22" />}
              disabled={!to}
            >
              Next{" "}
            </Button>
          </a>
        </Link>
      </footer>
    </>
  );
};

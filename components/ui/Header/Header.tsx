import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Logo } from "assets/images";
import { ChevronRight } from "components/svgs";

interface Props {
  back?: () => void;
}

export const Header = ({ back }: Props) => {
  return (
    <header className={styles["simple-header"]}>
      <div className="container">
        {back && (
          <button onClick={back} className={styles["back-button"]}>
            <ChevronRight direction="left" size="36" />
            <span>Back</span>
          </button>
        )}
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
      </div>
    </header>
  );
};

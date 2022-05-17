import Link from "next/link";
import styles from "./styles.module.scss";
import { Button, Header } from "components/ui";
import { ChevronRight } from "components/svgs";

interface Props {
  to?: string;
  back?: string;
  children: React.ReactNode;
  disabled?: boolean;
  handleClick?: () => void;
  headerBack?: () => void;
}

export const SimpleNavLayout = ({
  to,
  back,
  children,
  disabled,
  handleClick,
  headerBack,
}: Props) => {
  return (
    <>
      <Header back={headerBack} />
      <main className="main">{children}</main>
      <footer className={styles["simple-footer"]}>
        {back && (
          <Link href={back}>
            <a>
              <Button secondary>Back</Button>
            </a>
          </Link>
        )}

        <Link href={to || "#"}>
          <a className={disabled ? "disabled" : ""}>
            <Button
              onClick={handleClick}
              wide
              icon={<ChevronRight fill="white" size="22" />}
              disabled={disabled}
            >
              Next{" "}
            </Button>
          </a>
        </Link>
      </footer>
    </>
  );
};

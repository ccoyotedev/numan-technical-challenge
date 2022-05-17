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
}

export const SimpleNavLayout = ({
  to,
  back,
  children,
  disabled,
  handleClick,
}: Props) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <footer className={styles["simple-footer"]}>
        {back && (
          <Link href={back}>
            <a>
              <Button secondary>Back</Button>
            </a>
          </Link>
        )}
        {handleClick ? (
          <Button
            onClick={handleClick}
            wide
            icon={<ChevronRight fill="white" size="22" />}
            disabled={disabled}
          >
            Next{" "}
          </Button>
        ) : (
          <Link href={to || "#"}>
            <a className={disabled ? "disabled" : ""}>
              <Button
                wide
                icon={<ChevronRight fill="white" size="22" />}
                disabled={disabled}
              >
                Next{" "}
              </Button>
            </a>
          </Link>
        )}
      </footer>
    </>
  );
};

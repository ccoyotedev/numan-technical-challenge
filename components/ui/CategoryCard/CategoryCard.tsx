import {
  BloodTests,
  ErectileDysfunction,
  HairLoss,
  PrematureEjaculation,
  Supplements,
} from "assets/images";
import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  active: boolean;
}

export const CategoryCard = ({ name, active }: Props) => {
  const getBgColor = (name: string) => {
    switch (name.toLocaleLowerCase()) {
      case "blood tests":
        return "#B00020";
      case "premature ejaculation":
      case "erectile dysfunction":
        return "#4EF4FF";
      case "hair loss":
        return "#12FF8E";
      case "supplements":
        return "#FFC043";
      default:
        return "#000000";
    }
  };

  const getCategoryImage = (name: string): React.ReactNode | undefined => {
    switch (name.toLocaleLowerCase()) {
      case "blood tests":
        return <Image src={BloodTests} alt="blood tests" />;
      case "premature ejaculation":
        return <Image src={PrematureEjaculation} alt="Premature ejaculation" />;
      case "erectile dysfunction":
        return <Image src={ErectileDysfunction} alt="erectile dysfunction" />;
      case "hair loss":
        return <Image src={HairLoss} alt="hair loss" />;
      case "supplements":
        return <Image src={Supplements} alt="supplements" />;
      default:
        return;
    }
  };

  return (
    <div
      className={`${styles["card-container"]} ${
        active ? styles["active"] : ""
      }`}
      style={{ backgroundColor: getBgColor(name) }}
    >
      {!!getCategoryImage(name) && (
        <div className={styles["img-container"]}>{getCategoryImage(name)}</div>
      )}
      <h2>{name}</h2>
    </div>
  );
};

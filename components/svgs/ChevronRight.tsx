interface Props {
  fill?: string;
  size?: string;
  direction?: "left" | "right";
}

export const ChevronRight = ({ fill, size, direction = "right" }: Props) => {
  const style: React.CSSProperties =
    direction === "left" ? { transform: "rotate(180deg)" } : {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || "48"}
      width={size || "48"}
      fill={fill || "inherit"}
      viewBox="0 0 50 50"
      style={style}
    >
      <path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z" />
    </svg>
  );
};

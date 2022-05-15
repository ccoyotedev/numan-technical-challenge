interface Props {
  fill?: string;
  size?: string;
  open?: boolean;
}

export const ExpandIcon = ({ fill, size, open }: Props) => {
  const style: React.CSSProperties = open
    ? { transform: "rotate(180deg)" }
    : {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || "48"}
      width={size || "48"}
      fill={fill || "inherit"}
      viewBox="0 0 50 50"
      style={{
        ...style,
        transition: ".3s cubic-bezier(.25,.8,.5,1),visibility 0s",
      }}
    >
      <path d="M24 30.75 12 18.75 14.15 16.6 24 26.5 33.85 16.65 36 18.8Z" />
    </svg>
  );
};

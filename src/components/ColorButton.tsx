import styled from "styled-components";

export type ButtonColor =
  | "black"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "grey"
  | "white"
  | "gold"
  | "silver";

export const ColorMap: Record<ButtonColor, string> = {
  black: "#000",
  brown: "#b45309",
  red: "#ef4444",
  orange: "#f97316",
  yellow: "#fde047",
  green: "#22c55e",
  blue: "#3b82f6",
  purple: "#a855f7",
  grey: "#6b7280",
  white: "#fff",
  gold: "#ccd348",
  silver: "#e5e7eb",
};

type Props = {
  color: ButtonColor;
  onClick: () => void;
};

const StyledButton = styled("button")`
  display: block;
  border-radius: 0;
  outline: none;
  border: none;
  height: 30px;
`;

function ColorButton({ onClick, color }: Props) {
  return (
    <StyledButton
      style={{
        backgroundColor: ColorMap[color] || "#fff",
      }}
      onClick={onClick}
    />
  );
}

export default ColorButton;

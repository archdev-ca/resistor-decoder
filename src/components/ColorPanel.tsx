import React from "react";
import styled from "styled-components";
import ColorButton, { ButtonColor } from "./ColorButton";

type Props = {
  sx?: React.CSSProperties;
  label: string;
  data: Partial<Record<ButtonColor, number>>;
};

const Container = styled("div")`
  padding: 5px;
  border-radius: 4px;
  background-color: #64748b;
`;

const Label = styled("div")`
  color: #fff;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-transform: uppercase;
  padding-right: 10px;
  padding-left: 15px;
`;

function ColorPanel({ sx, label, data }: Props) {
  return (
    <Container style={{ display: "flex", ...sx }}>
      <Label>{label}</Label>
      <div>
        {Object.keys(data).map((color) => {
          return (
            <ColorButton
              key={color}
              color={color as ButtonColor}
              onClick={() => {}}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default ColorPanel;

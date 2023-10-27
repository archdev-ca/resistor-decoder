import React from "react";
import styled from "styled-components";

const StyledBand = styled("div")`
  width: 40px;
  height: 100%;
  background-color: #f00;
  position: absolute;
  top: 0;
  left: 80px;
  z-index: 1;
`;

type Props = {
  sx?: React.CSSProperties;
};

function Band({ sx }: Props) {
  return <StyledBand style={sx}></StyledBand>;
}

export default Band;

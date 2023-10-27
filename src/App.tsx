import "./App.css";
import styled from "styled-components";
import Band from "./components/Band";
import ColorPanel from "./components/ColorPanel";

const ResistorWrapper = styled("div")`
  width: 480px;
  height: 150px;
  background-color: #f9ddbf;
  border-radius: 75px;
  position: relative;
  overflow: hidden;
  &:before {
    content: " ";
    display: block;
    height: 50px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    border-radius: 25px;
    margin: 0 auto;
    z-index: 2;
  }
  &:after {
    content: " ";
    display: block;
    height: 70px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.45) 40%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    border-radius: 25px;
    margin: 0 auto;
    z-index: 2;
  }
`;

const PanelRow = styled("div")`
  display: flex;
`;

function App() {
  return (
    <>
      <main>
        <ResistorWrapper>
          <Band />
          <Band sx={{ left: "160px" }} />
          <Band sx={{ left: "240px" }} />
          <Band sx={{ left: "360px" }} />
        </ResistorWrapper>
        <PanelRow>
          <ColorPanel
            label="Band 1"
            data={{
              black: 0,
              brown: 1,
              red: 2,
              orange: 3,
              yellow: 4,
              green: 5,
              blue: 6,
              purple: 7,
              grey: 8,
              white: 9,
              gold: 10,
              silver: 11,
            }}
          />
          <ColorPanel
            sx={{ marginLeft: "15px" }}
            label="Band 2"
            data={{
              black: 0,
              brown: 1,
              red: 2,
              orange: 3,
              yellow: 4,
              green: 5,
              blue: 6,
              purple: 7,
              grey: 8,
              white: 9,
              gold: 10,
              silver: 11,
            }}
          />
          <ColorPanel
            sx={{ marginLeft: "15px" }}
            label="Band 3"
            data={{
              black: 0,
              brown: 1,
              red: 2,
              orange: 3,
              yellow: 4,
              green: 5,
              blue: 6,
              purple: 7,
              grey: 8,
              white: 9,
              gold: 10,
              silver: 11,
            }}
          />
          <ColorPanel
            sx={{ marginLeft: "auto" }}
            label="Band 4"
            data={{
              black: 0,
              brown: 1,
              red: 2,
              orange: 3,
              yellow: 4,
              green: 5,
              blue: 6,
              purple: 7,
              grey: 8,
              white: 9,
              gold: 10,
              silver: 11,
            }}
          />
        </PanelRow>
      </main>
    </>
  );
}

export default App;

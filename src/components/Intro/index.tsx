/** @jsxImportSource @emotion/react */

// styles
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";

const intro = css`
  display: flex;
  width: 100%;
`;

const introMessage = css`
  grid-area: message;
  padding: 10px 30px;
  width: auto;
  height: 50px;
  background: #fff;
  border-radius: 8px;
  font-size: 1.3rem;
  transition: ease-in-out 0.3s;
  &:hover {
    cursor: pointer;
    background: #efefef;
  }
`;

const messageClose = css`
  grid-area: button;
  align-self: start;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -15px;
  left: 15px;
  width: 30px;
  height: 30px;
  background: ${colors.robotGreen};
  border: 2px solid black;
  border-radius: 50%;
  font-size: 1.1rem;
  line-height: 30px;
  text-align: center;
  transition: ease-in-out 0.3s;
  &:hover {
    cursor: pointer;
    background: #55bd9e;
  }
`;

interface IntroProps {
  displayMessage: boolean;
  openChat: () => void;
  handleMessage: () => void;
}

export const Intro: React.FC<IntroProps> = ({
  displayMessage,
  openChat,
  handleMessage,
}) => {
  return (
    <div css={intro}>
      {displayMessage && (
        <>
          <button css={messageClose} onClick={handleMessage}>
            ✖️
          </button>
          <div css={introMessage} onClick={openChat}>
            Hey 👋, let's chat!
          </div>
        </>
      )}
    </div>
  );
};

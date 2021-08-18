/** @jsxImportSource @emotion/react */

// styles
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";

const chatFooter = css`
  padding: 10px 20px;
  width: 100%;
  background: ${colors.robotGreen};
  border-radius: 0 0 8px 8px;
  border: 2px solid ${colors.robotBorder};
`;

export const ChatFooter: React.FC = ({ children }) => {
  return <div css={chatFooter}>{children}</div>;
};

/** @jsxImportSource @emotion/react */
// styles
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";

const chatContent = css`
  padding: 20px 30px;
  width: 100%;
  height: 100%;
  min-height: 200px;
  overflow-y: auto;
  background: #fff;
  border-right: 2px solid ${colors.robotBorder};
  border-left: 2px solid ${colors.robotBorder};
`;

export const ChatContent: React.FC = ({ children }) => {
  return <div css={chatContent}>{children}</div>;
};

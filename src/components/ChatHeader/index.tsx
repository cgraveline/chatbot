/** @jsxImportSource @emotion/react */
// styles
import { css } from '@emotion/react'
import { colors } from '../../styles/colors';
// image
const robotIcon = '../../robot.png';

const chatHeader = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    background: ${colors.robotGreen};
    border-radius: 8px 8px 0 0;
    border: 2px solid ${colors.robotBorder};
    :hover {
        cursor: pointer;
    }
`;

const chatHeaderIcon = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #fff;
    border: 2px solid ${colors.robotBorder};
    border-radius: 50%;
    img {
        width: 25px;
    }
`;

interface ChatHeaderProps {
    closeChat: () => void
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ closeChat }) => {
    return (
        <div css={chatHeader} onClick={closeChat}>
            <div css={chatHeaderIcon}>
                <img src={robotIcon} alt=""/>
            </div>
            ✖️
        </div>
    );
};
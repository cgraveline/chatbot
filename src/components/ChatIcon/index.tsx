/** @jsxImportSource @emotion/react */
// styles
import { css } from '@emotion/react'

const chatIcon = css`
    grid-area: icon;
    img {
        position: relative;
        top: -46px;
        left: -14px;
        width: 75px;
        z-index: 200;
    }
    :hover {
        cursor: pointer;
    }
`;

const speechBubble = css`
    position: absolute;
    top: 24px;
    left: -32px;
    width: 36px;
    height: 25px;
    border-radius: 4px;
    background: #fff;
    text-align: center;
    ::after {
        content: '';
        position: absolute;
        right: 10px;
        bottom: -10px;
        display: block;
        border-top: 5px solid #fff;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid transparent;
        
    }
`;

const robotIcon = '../../robot.png';

interface ChatIconProps {
    icon: boolean,
    showSpeechBubble: boolean,
    handleIcon: () => void
}

export const ChatIcon: React.FC<ChatIconProps> = ({ icon, handleIcon, showSpeechBubble }) => {
    return (
        <>
            {icon &&
                <div css={chatIcon} onClick={handleIcon}>
                    {showSpeechBubble && <div css={speechBubble}>...</div>}
                    <img src={robotIcon} alt="" />
                </div>
            }
        </>
    )
}
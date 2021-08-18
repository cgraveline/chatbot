/** @jsxImportSource @emotion/react */
import { useState, ChangeEvent, FormEvent } from "react";
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";

// components
import { Intro } from "../Intro";
import { ChatIcon } from "../ChatIcon";
import { ChatHeader } from "../ChatHeader";
import { ChatContent } from "../ChatContent";
import { Form } from "../Form";
import { ChatFooter } from "../ChatFooter";

const chatbot = css`
  position: fixed;
  right: 5%;
  bottom: 5%;
  display: flex;
  padding: 20px;
  border: none;
  border-radius: 8px;
`;

const introWrap = css`
  display: flex;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-15%);
    }
    50% {
      transform: translateY(15%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const chat = css`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  max-height: 600px;
`;

const convo = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const response = css`
  padding: 8px 16px;
  margin-bottom: 8px;
  background: ${colors.robotComplement};
  border-radius: 8px;
`;

function Chatbot() {
  // interfaces
  interface IMessage {
    message: [
      {
        from: string;
        message: string;
      }
    ];
  }

  const initialState: IMessage = {
    message: [
      {
        from: "bot",
        message: "Who do I have the pleasure of speaking with?",
      },
    ],
  };

  // hooks
  const [messageState, setMessageState] = useState<boolean>(true);
  const [messageClosed, setMessageClosed] = useState<boolean>(false);
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [icon, setIcon] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputErr, setInputErr] = useState<boolean>(false);
  const [state, setState] = useState(initialState);

  // when state updates, update allMessages object
  let allMessages: IMessage = state;

  function handleIcon() {
    setMessageState(false);
    setChatOpen(true);
    setIcon(false);
  }

  function closeChat() {
    setChatOpen(false);
    setIcon(true);
    setMessageClosed(true);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleIntroMessage() {
    setMessageState(false);
    setMessageClosed(true);
  }

  function respond() {
    setTimeout(() => {
      setState({
        ...state,
        message: [
          {
            from: "bot",
            message: `It's nice to meet you, ${inputValue}`,
          },
        ],
      });
    }, 1500);
  }

  // error message
  const inputErrorMessage = "Please type a message";
  function formValidation() {
    inputValue.length <= 0 ? setInputErr(true) : setInputErr(false);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formValidation();

    async function addToState() {
      setState({
        ...state,
        message: [
          {
            from: "user",
            message: inputValue,
          },
        ],
      });
      await respond();
    }

    if (inputValue && inputValue.length > 0) {
      addToState();
    }
  }

  return (
    <div css={chatbot}>
      <div css={introWrap}>
        <Intro
          displayMessage={messageState}
          openChat={handleIcon}
          handleMessage={handleIntroMessage}
        />
        <ChatIcon
          icon={icon}
          handleIcon={handleIcon}
          showSpeechBubble={messageClosed}
        />
      </div>
      {chatOpen && (
        <div css={chat}>
          <ChatHeader closeChat={closeChat} />
          <ChatContent>
            <ul css={convo}>
              {allMessages.message.map((message) =>
                message.from === "user" ? (
                  <li
                    key={message.from}
                    css={css`
                      ${response};
                      background-color: #eee;
                      text-align: right;
                    `}
                  >
                    {message.message}
                  </li>
                ) : (
                  <li css={response} key={message.from}>
                    {message.message}
                  </li>
                )
              )}
            </ul>
          </ChatContent>
          <ChatFooter>
            <Form
              handleSubmit={handleSubmit}
              placeholder="Type your message..."
              onFocus={() => setInputErr(false)}
              value={inputValue}
              onChange={handleChange}
              error={inputErr}
              errorMessage={inputErrorMessage}
            />
          </ChatFooter>
        </div>
      )}
    </div>
  );
}

export default Chatbot;

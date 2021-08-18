/** @jsxImportSource @emotion/react */
// styles
import { css } from "@emotion/react";
import { ChangeEvent, FormEvent, FocusEvent } from "react";
import { colors } from "../../styles/colors";

const formWrap = css`
  display: flex;
`;

const input = css`
  padding: 8px 20px;
  width: 100%;
  border: 2px solid ${colors.robotBorder};
  border-radius: 8px 0 0 8px;
  background: #fff;
  color: ${colors.textDefault};
`;

const send = css`
  padding: 8px 10px;
  border: 2px solid ${colors.robotBorder};
  border-left: none;
  border-radius: 0 8px 8px 0;
  background: #fff;
  color: ${colors.textDefault};
  :hover {
    cursor: pointer;
  }
`;

const errorWrap = css`
  width: 100%;
  padding: 10px;
  margin-top: -4px;
  background: tomato;
  border-radius: 0 0 8px 8px;
  p {
    margin: 0;
    padding: 0;
    line-height: 1rem;
    color: #fff;
  }
`;

interface FormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onFocus: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  error: boolean;
  errorMessage: string;
}

export const Form: React.FC<FormProps> = ({
  handleSubmit,
  placeholder,
  value,
  onFocus,
  onChange,
  error,
  errorMessage,
}) => {
  return (
    <>
      <form css={formWrap} onSubmit={handleSubmit}>
        <input
          css={input}
          type="text"
          placeholder={placeholder}
          onFocus={onFocus}
          value={value}
          onChange={onChange}
        />
        <button css={send} type="submit">
          Send
        </button>
      </form>
      {error && (
        <div css={errorWrap}>
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

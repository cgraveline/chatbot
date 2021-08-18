import { css } from '@emotion/react';
import { colors } from './colors';

export const globalStyles = css`
    * {
        box-sizing: border-box;
    }
    html,
    body {
        margin: 0;
        height: 100%;
        background: black;
        font-family: Futura, Trebuchet MS, Arial, sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
         color: ${colors.textDefault}
    },

    h1 {
        color: ${colors.textLight};
        font-size: 3rem;
        text-align: center;
    }
    `;

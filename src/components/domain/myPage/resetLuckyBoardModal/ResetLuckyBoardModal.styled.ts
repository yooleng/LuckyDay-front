import { css, Theme } from "@emotion/react";

export const modal = (theme: Theme) =>
  css`
    div {
      align-items: center;
      justify-content: center;
      p {
        width: 100%;
        color: ${theme.colors.black};
      }
    }
  `;

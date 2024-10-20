import { css } from "@emotion/react";

export const fonts = {
  logo: css`
    font-size: 1.8rem;
    line-height: calc(23 / 18);
    font-family: "omyu", sans-serif;
  `,
  headline1: css`
    font-size: 1.8rem;
    line-height: calc(23 / 18);
    font-family: "omyu", sans-serif;
  `,
  headline2: css`
    font-size: 1.5rem;
    line-height: calc(20 / 15);
    font-family: "omyu", sans-serif;
  `,
  headline3: css`
    font-size: 1.7rem;
    line-height: calc(22 / 17);
    font-family: "omyu", sans-serif;
  `,
  body1: css`
    font-size: 1.5rem;
    line-height: calc(20 / 15);
    font-family: "omyu", sans-serif;
  `,
  body2: css`
    font-size: 1.2rem;
    line-height: calc(16 / 12);
    font-family: "omyu", sans-serif;
  `,
  luckyBall1: css`
    font-size: 2.7rem;
    line-height: calc(30 / 27);
    font-family: "omyu", sans-serif;
  `,
  luckyBall2: css`
    font-size: 2.3rem;
    line-height: calc(27 / 23);
    font-family: "omyu", sans-serif;
  `,
} as const;

export type Fonts = typeof fonts;

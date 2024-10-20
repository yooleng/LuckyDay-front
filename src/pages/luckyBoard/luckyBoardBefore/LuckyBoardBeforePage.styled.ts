import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-height: 945px) {
    min-height: 80vh;
  }
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1};
    margin: 6% 0px 5px 0px;
    text-align: center;
    white-space: pre-wrap;

    @media (max-width: 375px) {
      ${theme.fonts.headline2};
      margin: 0;
    }
  `}
`;

export const LuckyMachine = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/machine-empty.webp");

  &::before {
    content: "";
    display: block;
    padding-top: calc(625 / 420 * 100%);
  }

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: contain;
  }

  @media (max-width: 412px) {
    width: 390px;
  }

  @media (max-width: 392px) {
    width: 370px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`;

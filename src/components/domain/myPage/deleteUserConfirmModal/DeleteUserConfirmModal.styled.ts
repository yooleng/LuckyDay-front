import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 50px 20px 20px 20px;
`;

export const Logo_Sad = styled.div`
  width: 100px;
  height: 100px;
  margin: 30px 0px 15px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/logo-sad-blue.webp");
`;

export const Text_h1 = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
  `}
`;

export const Text_h2 = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline2}
    margin: 20px 0px 30px 0px;
  `}
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

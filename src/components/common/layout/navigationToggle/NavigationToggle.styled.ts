import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MenuIcon = styled.div`
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  & > svg {
    width: 34px;
    height: 34px;
  }
`;

export const ToggleBox = styled.div<{ isVisible: boolean }>`
  position: absolute;
  width: 200px;
  height: 490px;
  border-radius: 15px 0px 0px 15px;
  box-shadow: -4px 4px 4px 0px #00000040;
  background-size: cover;
  background-position: center;
  background-image: url("/images/background.webp");
  transition: opacity 0.1s ease, transform 0.2s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(0.95)")};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  z-index: 3;
`;

export const ToggleContentsBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 40px 20px 40px 20px;
    color: ${theme.colors.black};
    ${theme.fonts.logo};
  `}
`;

export const ProfileBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    ${theme.fonts.headline2};
  `}
`;

export const ProfileImage = styled.div<{ imageUrl: string }>`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.imageUrl});
`;

export const ToggleMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 5px 20px 5px;
`;

export const ToggleMenuBottom = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    color: ${theme.colors.black};
    transition: color 0.2s ease;
    &:hover {
      color: ${theme.colors.orange};
    }
    cursor: pointer;
  `}
`;

export const ToggleMenu = styled(ToggleMenuBottom)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`;

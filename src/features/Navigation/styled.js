import styled, { css } from "styled-components";

export const MainNav = styled.nav`
  position: fixed;
  width: ${({ theme }) => theme.size.width_nav};
  height: 100%;
  background: ${({ theme }) => theme.colorElements.nav_bg};
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.colorElements.nav_shadow};
  transform: translateX(0);
  transition: transform 0.3s;
  z-index: 1;

  ${({ $toggleNav }) =>
    $toggleNav &&
    css`
      transform: translateX(-${({ theme }) => theme.size.width_nav});
    `}
`;

import styled, { css } from "styled-components";

export const MainNav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: ${({ theme }) => theme.size.heightLogoBar};
  padding: 10px;
  background: ${({ theme }) => theme.colorElements.nav_logo_bg};
  border-bottom: 1px solid ${({ theme }) => theme.colorElements.nav_logo_border};
  text-align: center;
  font-size: 20px;
`;

export const LogoName = styled.h1`
  margin: 0;
`;

export const ListNav = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ItemNav = styled.li`
  margin-bottom: 7px;
`;

export const LinkNav = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 10px 10px 20px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.light};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.primary_dark_color};
  }
`;

export const Autor = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.primary_light_color};
  font-size: 14px;
`;

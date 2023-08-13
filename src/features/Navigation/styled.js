import { Link } from "react-router-dom";
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
  z-index: 10;

  ${({ $toggleNav }) =>
    $toggleNav &&
    css`
      transform: translateX(-${({ theme }) => theme.size.width_nav});
    `}

  @media (max-width: ${({ theme }) => theme.media.hidden_nav}) {
    transform: translateX(-${({ theme }) => theme.size.width_nav});

    ${({ $toggleMobileNav }) =>
      $toggleMobileNav &&
      css`
        transform: translateX(0);
      `}
  }
`;

export const MobileMask = styled.div`
  position: absolute;
  display: ${({ $toggleMobileNav }) => ($toggleMobileNav ? "block" : "none")};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color.primary_light_color};
  opacity: 0.7;
  z-index: 5;

  @media (min-width: ${({ theme }) => theme.media.hidden_nav}) {
    display: none;
  }
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

export const LinkNav = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 10px 15px 20px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.light};
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.color.primary_dark_color};
    transition: background 0.3s;
  }
`;

export const Autor = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.primary_light_color};
  font-size: 14px;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { SelectList } from "../../common/elements/styled";

export const Conteiner = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  height: ${({ theme }) => theme.size.heightLogoBar};
  padding: 10px 20px;
  background: ${({ theme }) => theme.colorElements.bar_bg};
  border-bottom: 1px solid ${({ theme }) => theme.colorElements.bar_border};

  @media (max-width: 400px) {
    height: auto;
  }
`;

export const Data = styled.span`
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1;
`;

export const DataName = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const DataValue = styled.span`
  font-size: 14px;
`;

export const BarLeft = styled.div`
  padding-right: 10px;
`;

export const ButtonToggleNav = styled.button`
  height: 30px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.light};
  cursor: pointer;
  transform: rotate(${({ $toggleNav }) => ($toggleNav ? 0 : 180)}deg);
  transition: transform 0.4s;

  @media (max-width: ${({ theme }) => theme.media.hidden_nav}) {
    display: none;
  }
`;

export const ButtonToggleMobileNav = styled(ButtonToggleNav)`
  display: none;
  @media (max-width: ${({ theme }) => theme.media.hidden_nav}) {
    transform: rotate(0deg);
    display: block;
  }
`;

export const BarCenter = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 10px;
  flex-grow: 1;

  @media (max-width: 400px) {
    order: 1;
    width: 100%;
    padding: 10px;
  }
`;

export const SelectBar = styled.div`
  position: relative;

  ${DataName} {
    text-align: center;
  }

  ${DataValue} {
    text-align: center;
  }
`;

export const SelectListBar = styled(SelectList)`
  top: 42px;
`;

export const BarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding-left: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 13px;
  background: ${({ $visible, theme }) =>
    $visible ? theme.color.primary_light_color : "none"};
  border: none;
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  color: ${({ theme }) => theme.color.light};
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: ${({ theme }) => theme.color.primary_light_color};
  }
`;

export const PanelUser = styled.div`
  position: absolute;
  top: 53px;
  right: 0;
  min-width: 300px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  box-shadow: 0 0 10px 2px ${({ theme }) => theme.color.dark};
  transition: opacity 0.4s, visibility 0.4s;
  z-index: 1;

  @media (max-width: 380px) {
    min-width: 85vw;
  }
`;

export const PanelUserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${({ theme }) => theme.color.primary_dark_color};
  border-top-left-radius: ${({ theme }) => theme.size.border_radius_small};
  border-top-right-radius: ${({ theme }) => theme.size.border_radius_small};
  color: ${({ theme }) => theme.color.light};
`;

export const Name = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

export const Email = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const Initials = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 15px;
  padding: 15px;
  background: ${({ theme }) => theme.color.primary_light_color};
  border-radius: 50%;
  font-size: 23px;
  font-weight: 600;
`;

export const PanelUserList = styled.ul`
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.color.primary_light_color};
  list-style: none;
  overflow: auto;
`;

export const ListLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};
  transition: background 0.4s;

  &:hover {
    background: ${({ theme }) => theme.color.primary_color};
  }
`;

export const TextLink = styled.span`
  margin-left: 10px;
`;

export const LoginOut = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.dark};
`;

export const ListButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
  background: ${({ theme }) => theme.color.primary_light_color};
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};
  transition: background 0.4s;

  &:hover {
    background: ${({ theme }) => theme.color.primary_color};
  }
  cursor: pointer;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.colorElements.bar_bg};
  border-bottom: 1px solid ${({ theme }) => theme.colorElements.bar_border};
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
`;

export const BarRight = styled.div`
  padding-left: 10px;
`;

export const ButtonUser = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 13px;
  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  color: ${({ theme }) => theme.color.light};
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: ${({ theme }) => theme.color.primary_light_color};
  }
`;

export const NameRoleUser = styled.span`
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1;
`;

export const UserName = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const UserRole = styled.span`
  font-size: 14px;
`;

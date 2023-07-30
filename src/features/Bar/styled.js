import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const BarLeft = styled.div`
  padding-right: 10px;
`;

export const ButtonToggleNav = styled.button`
  height: 30px;
  background: none;
  border: none;
  font-size: 25px;
  color: ${({ theme }) => theme.color.light};
  cursor: pointer;
  transform: rotate(${({ $toggleNav }) => ($toggleNav ? 0 : 180)}deg);
  transition: transform 0.4s;
`;

export const BarRight = styled.div`
  padding-left: 10px;
`;

export const ButtonUser = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.light};
  cursor: pointer;
`;

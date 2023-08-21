import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;

  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const Select = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SelectList = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 71px;
  width: 100%;
  background: ${({ theme }) => theme.color.primary_light_color};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  opacity: ${({ $isVisibilty }) => ($isVisibilty ? 1 : 0)};
  visibility: ${({ $isVisibilty }) => ($isVisibilty ? "visible" : "hidden")};
  box-shadow: 0 0 10px 2px ${({ theme }) => theme.color.dark};
  list-style: none;
  transition: opacity 0.4s, visibility 0.4s;
`;

export const SelectItem = styled.li`
  border-top: 1px solid ${({ theme }) => theme.color.dark};
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 15px 10px;
  background: ${({ theme }) => theme.color.primary_light_color};
  border: none;
  text-decoration: none;
  text-align: left;
  color: ${({ theme }) => theme.color.light};
  transition: background 0.4s;

  &:hover {
    background: ${({ theme }) => theme.color.primary_color};
  }
  cursor: pointer;
`;

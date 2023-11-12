export const BoxSelect = styled.div`
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
  opacity: ${({ $isVisibilty }) => ($isVisibilty ? 1 : 0)};
  visibility: ${({ $isVisibilty }) => ($isVisibilty ? "visible" : "hidden")};
  box-shadow: 0 0 10px 2px ${({ theme }) => theme.color.dark};
  list-style: none;
  transition: opacity 0.4s, visibility 0.4s;
  z-index: 10;
`;

export const SelectItem = styled.li`
  border-top: 1px solid ${({ theme }) => theme.color.dark};
  &:first-child {
    border-top: none;
  }
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 10px;
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

export const MaskSelect = styled.div`
  position: absolute;
  top: 29px;
  width: 100%;
  height: 43px;
  background: rgba(0, 0, 0, 0);
  z-index: 1;
  cursor: pointer;
`;

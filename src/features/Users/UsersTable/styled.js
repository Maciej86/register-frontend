import styled from "styled-components";

export const ButtonArea = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Separator = styled.span`
  &::after {
    content: "|";
    display: inline-block;
    padding: 0 7px;
  }

  &:first-child {
    padding-left: 0;
  }

  &:last-child::after {
    content: "";
    padding: 0;
  }
`;

export const LackOrganization = styled.span`
  color: ${({ theme }) => theme.color.dark};
  font-weight: 500;
`;

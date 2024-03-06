import styled from "styled-components";

export const ButtonArea = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 750px) {
    margin-top: 20px;
    justify-content: start;
  }
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

export const TextDelete = styled.div`
  margin: 20px 0 30px 0;
  font-weight: 500;
  text-align: center;
`;

export const TextQuestion = styled.p`
  font-size: 20px;
`;

export const TextUser = styled.h3`
  font-size: 27px;
`;

export const TextInfo = styled.p`
  font-size: 15px;
`;

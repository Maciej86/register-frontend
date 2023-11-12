import styled from "styled-components";

const userRole = styled.span`
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.size.border_radius};
  font-weight: 600;
  font-size: 13px;
`;

export const UserDeveloper = styled(userRole)`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary_color};
`;

export const UserAdmin = styled(userRole)`
  background: ${({ theme }) => theme.color.danger};
  color: ${({ theme }) => theme.color.danger_dark};
`;

export const UserUser = styled(userRole)`
  background: ${({ theme }) => theme.color.primary_color};
  color: ${({ theme }) => theme.color.light};
`;

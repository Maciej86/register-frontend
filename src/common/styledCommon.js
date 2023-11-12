import styled from "styled-components";

export const getColorButtonOnValue = (theme, action) => {
  switch (action) {
    case "confirm":
      return theme.color.info;
    case "cancel":
      return theme.color.primary_color;
    case "warning":
      return theme.color.warning;
    case "delete":
      return theme.color.danger;
    default:
      return theme.color.info;
  }
};

export const getColorButtoHovernOnValue = (theme, action) => {
  switch (action) {
    case "confirm":
      return theme.color.info_dark;
    case "cancel":
      return theme.color.dark;
    case "warning":
      return theme.color.warning_dark;
    case "delete":
      return theme.color.danger_dark;
    default:
      return theme.color.info_dark;
  }
};

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: ${({ $small }) => ($small ? "5px" : "10px")} 7px;
  background: ${({ theme }) => theme.color.dark};
  border: none;
  border-bottom: 2px solid
    ${({ theme, $empty }) => ($empty ? theme.color.danger : theme.color.info)};
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  color: ${({ theme }) => theme.color.light};
  opacity: ${({ disabled }) => (disabled ? ".6" : "1")};
  transition: border-bottom-color 0.5s;

  &:hover,
  &:focus {
    outline: none;
    border-bottom-color: ${({ theme, disabled }) =>
      disabled ? theme.color.info : theme.color.success};
  }
`;

export const TileConteiner = styled.div`
  padding: 14px 14px 20px 14px;
  background: ${({ theme }) => theme.color.primary_dark_color};
  border-radius: ${({ theme }) => theme.size.tile_radius};
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.colorElements.tile_shadow};
`;

export const TileTitle = styled.h2`
  margin: 0;
  font-size: 23px;
`;

export const TileSubTitle = styled.p`
  margin: 0;
  line-height: 1;
`;

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

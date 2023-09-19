import styled from "styled-components";

const getColorTypeModal = (theme, type) => {
  switch (type) {
    case "confirm":
      return theme.color.info;
    case "cancel":
      return theme.color.dark;
    case "warning":
      return theme.color.warning;
    case "delete":
      return theme.color.danger;
    default:
      return theme.color.info;
  }
};

const getColorDarkTypeModal = (theme, type) => {
  switch (type) {
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

export const Conteiner = styled.div`
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color.primary_color_alpha};
  backdrop-filter: blur(2px);
  z-index: 90;
`;

export const WindowModal = styled.div`
  width: 700px;
  max-width: 90%;
  border-radius: ${({ theme }) => theme.size.border_radius_small};
  box-shadow: 0 0 15px 3px
    ${({ theme, $type }) => getColorDarkTypeModal(theme, $type)};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  background: ${({ theme, $type }) => getColorTypeModal(theme, $type)};
  border-top-left-radius: ${({ theme }) => theme.size.border_radius_small};
  border-top-right-radius: ${({ theme }) => theme.size.border_radius_small};
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme, $type }) => getColorDarkTypeModal(theme, $type)};
`;

export const CloseModal = styled.button`
  height: 25px;
  background: none;
  border: none;
  color: ${({ theme, $type }) => getColorDarkTypeModal(theme, $type)};
  cursor: pointer;
`;

export const Body = styled.div`
  padding: 15px 10px;
  background: ${({ theme }) => theme.color.primary_color};
  border-bottom-left-radius: ${({ theme }) => theme.size.border_radius_small};
  border-bottom-right-radius: ${({ theme }) => theme.size.border_radius_small};
`;

export const ButtonAction = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

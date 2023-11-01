import { TileConteiner, TileSubTitle, TileTitle } from "../styledCommon";
import { Body, Header } from "./styled";

export const Tile = ({ title, subTitle = "", body }) => {
  return (
    <TileConteiner>
      <Header>
        <TileTitle>{title}</TileTitle>
        <TileSubTitle>{subTitle}</TileSubTitle>
      </Header>
      <Body>{body}</Body>
    </TileConteiner>
  );
};

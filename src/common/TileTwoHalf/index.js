import { TileConteiner, TileSubTitle, TileTitle } from "../styledCommon";
import { Half, TileArea } from "./styled";

export const TileTwoHalf = ({ title, subTitle, body }) => {
  return (
    <TileConteiner>
      <TileArea>
        <Half>
          <TileTitle>{title}</TileTitle>
          <TileSubTitle>{subTitle}</TileSubTitle>
        </Half>
        <Half>{body}</Half>
      </TileArea>
    </TileConteiner>
  );
};

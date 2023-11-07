import { TileConteiner, TileSubTitle, TileTitle } from "../styledCommon";
import { Content, Half, TileArea } from "./styled";

export const TileTwoHalfAndContenet = ({
  title,
  subTitle,
  rightSite,
  content,
}) => {
  return (
    <TileConteiner>
      <TileArea>
        <Half>
          <TileTitle>{title}</TileTitle>
          <TileSubTitle>{subTitle}</TileSubTitle>
        </Half>
        <Half>{rightSite}</Half>
      </TileArea>
      <Content>{content}</Content>
    </TileConteiner>
  );
};

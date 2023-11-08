import { TileConteiner, TileSubTitle, TileTitle } from "../styledCommon";
import { Content, Half, TileArea } from "./styled";

export const TileHeadAndBody = ({
  title,
  subTitle,
  rightSide,
  content = "",
}) => {
  return (
    <TileConteiner>
      <TileArea>
        <Half>
          <TileTitle>{title}</TileTitle>
          <TileSubTitle>{subTitle}</TileSubTitle>
        </Half>
        <Half>{rightSide}</Half>
      </TileArea>
      {content === "" ? "" : <Content>{content}</Content>}
    </TileConteiner>
  );
};

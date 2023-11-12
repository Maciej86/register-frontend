import {
  Content,
  Half,
  TileArea,
  TileConteiner,
  TileSubTitle,
  TileTitle,
} from "./styled";

export const Tile = ({ title, subTitle, rightSide = "", content = "" }) => {
  return (
    <TileConteiner>
      <TileArea>
        <Half $size={rightSide === "" ? false : true}>
          <TileTitle>{title}</TileTitle>
          <TileSubTitle>{subTitle}</TileSubTitle>
        </Half>
        {rightSide === "" ? "" : <Half $size={true}>{rightSide}</Half>}
      </TileArea>
      {content === "" ? "" : <Content>{content}</Content>}
    </TileConteiner>
  );
};

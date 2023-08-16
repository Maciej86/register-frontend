import { Body, Conteiner, Header, SubTitle, Title } from "./styled";

export const Tile = ({ title, subTitle = "", body }) => {
  return (
    <Conteiner>
      <Header>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Header>
      <Body>{body}</Body>
    </Conteiner>
  );
};

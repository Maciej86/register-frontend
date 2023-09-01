import { Conteiner, Content, Modal } from "./styled";

export const Confirm = () => {
  return (
    <Conteiner>
      <Modal $type={false}>
        <Content>
          Okienko z potwierdzeniem. Okienko z potwierdzeniem. Okienko z
          potwierdzeniem.
        </Content>
      </Modal>
      <Modal $type={true}>
        <Content>Okienko z potwierdzeniem.</Content>
      </Modal>
      <Modal $type={true}>
        <Content>Okienko z potwierdzeniem.</Content>
      </Modal>
      <Modal $type={false}>
        <Content>Okienko z potwierdzeniem.</Content>
      </Modal>
    </Conteiner>
  );
};

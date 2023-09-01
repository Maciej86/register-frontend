import { Conteiner, Content, Modal, Title } from "./styled";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const Confirm = ({ id, type, text }) => {
  const allConfirm = [
    {
      id: 1,
      type: false,
      text: "Przykładowy tekst, który będzie bardzo długi",
    },
    {
      id: 2,
      type: true,
      text: "Przykładowy tekst, który będzie bardzo długi",
    },
  ];
  return (
    <Conteiner>
      {allConfirm.map((item) => (
        <Modal key={item.id} $type={item.type}>
          <Content>
            <Title $type={item.type}>
              {item.type ? (
                <>
                  <AiOutlineCheckCircle size={"22px"} /> Sukces
                </>
              ) : (
                <>
                  <BiErrorCircle size={"23px"} /> Błąd
                </>
              )}
            </Title>
            {item.text}
          </Content>
        </Modal>
      ))}
    </Conteiner>
  );
};

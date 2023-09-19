import { Button } from "../elements/Button";
import {
  Body,
  ButtonAction,
  CloseModal,
  Conteiner,
  Header,
  WindowModal,
} from "./styled";
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";

export const Modal = ({
  setVisible,
  visible,
  type,
  content,
  typeButton,
  textHeader,
  buttonText,
  buttonIcon,
}) => {
  return (
    <Conteiner $visible={visible}>
      <WindowModal $type={type} $visible={visible}>
        <Header $type={type}>
          <span>{textHeader}</span>
          <CloseModal
            onClick={() => setVisible((visible) => !visible)}
            $type={type}
          >
            <AiFillCloseCircle size="25px" />
          </CloseModal>
        </Header>
        <Body $type={type}>
          {content}
          <ButtonAction>
            <Button
              type="button"
              text="Anuluj"
              typeAction="cancel"
              icon={<AiOutlineCloseCircle size={"15px"} />}
              action={() => setVisible((visible) => !visible)}
            />
            <Button
              type="button"
              text={buttonText}
              typeAction={typeButton}
              icon={buttonIcon}
              action={null}
            />
          </ButtonAction>
        </Body>
      </WindowModal>
    </Conteiner>
  );
};

import { TileTwoHalfAndContenet } from "../../../common/TileTwoHalfAndContent";
import { LinkButton } from "../../../common/elements/styled";
import { AiOutlineUserAdd } from "react-icons/ai";
import { ButtonArea } from "./styled";

export const UsersTable = () => {
  const ButtonAddUser = (
    <ButtonArea>
      <LinkButton to={`#`}>
        <AiOutlineUserAdd /> Utwórz konto
      </LinkButton>
    </ButtonArea>
  );

  return (
    <TileTwoHalfAndContenet
      title="Użytkownicy"
      subTitle="Zarządzaj użytkownikami"
      rightSide={ButtonAddUser}
      content="Tutaj tabelka z uzytkownikami"
    />
  );
};

import { TileHeadAndBody } from "../../../common/TileHeadAndBody";
import { LinkButton } from "../../../common/elements/styled";
import { AiOutlineUserAdd } from "react-icons/ai";
import { ButtonArea } from "./styled";
import { useAllUsers } from "./checkValue/useAllUsers";
import { USERSETTINGS } from "../../../core/InfoText";

export const UsersTable = () => {
  const { viewAllUsers } = useAllUsers();

  const ButtonAddUser = (
    <ButtonArea>
      <LinkButton to={`#`}>
        <AiOutlineUserAdd /> {USERSETTINGS.CREATE_ACCOUNT}
      </LinkButton>
    </ButtonArea>
  );

  return (
    <TileHeadAndBody
      title={USERSETTINGS.COM_TITLE_TABLE_USERS}
      subTitle={USERSETTINGS.COM_SUBTITLE_TABLE_USERS}
      rightSide={ButtonAddUser}
      content={viewAllUsers}
    />
  );
};

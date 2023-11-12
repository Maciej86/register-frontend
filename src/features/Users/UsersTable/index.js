import { USERSETTINGS } from "../../../core/InfoText";
import { Tile } from "../../../common/Tile";
import { LinkButton } from "../../../common/styledLinkButton";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useAllUsers } from "./checkValue/useAllUsers";
import { ButtonArea } from "./styled";

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
    <Tile
      title={USERSETTINGS.COM_TITLE_TABLE_USERS}
      subTitle={USERSETTINGS.COM_SUBTITLE_TABLE_USERS}
      rightSide={ButtonAddUser}
      content={viewAllUsers}
    />
  );
};

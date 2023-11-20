import { NAVIGATION, USERSETTINGS } from "../../../core/InfoText";
import { Tile } from "../../../common/Tile";
import { LinkButton } from "../../../common/styledLinkButton";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useTableUsers } from "./view/useTableUsers";
import { ButtonArea } from "./styled";

export const UsersTable = () => {
  const { viewAllUsers } = useTableUsers();

  const ButtonAddUser = (
    <ButtonArea>
      <LinkButton to={`/${NAVIGATION.NAV_LINK_ADD_USERS}`}>
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

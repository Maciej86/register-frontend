import { PiUsers } from "react-icons/pi";
import { Tile } from "../../../common/Tile";
import { LinkButton } from "../../../common/styledLinkButton";
import { NAVIGATION, USERSETTINGS } from "../../../core/InfoText";
import { ButtonArea } from "../TableUsers/styled";
import { FormAddUser } from "./view/FormAddUser";

export const AddUser = () => {
  const { formAddUser } = FormAddUser();

  const ButtonAllUsers = (
    <ButtonArea>
      <LinkButton to={`/${NAVIGATION.NAV_LINK_USERS}`}>
        <PiUsers /> {USERSETTINGS.COM_SUBTITLE_TABLE_USERS}
      </LinkButton>
    </ButtonArea>
  );

  return (
    <Tile
      title={USERSETTINGS.CREATE_ACCOUNT_TITLE}
      subTitle={USERSETTINGS.CREATE_ACCOUNT_SUBTITLE}
      rightSide={ButtonAllUsers}
      content={formAddUser}
    />
  );
};

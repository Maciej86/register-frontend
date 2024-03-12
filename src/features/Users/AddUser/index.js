import { Tile } from "../../../common/Tile";
import { USERSETTINGS } from "../../../core/InfoText";
import { useErrorConnectServer } from "../../../core/hooks/useErrorConnectServer";
import { selectErrorServerUser } from "../../../store/User/sliceUser";
import { FormAddUser } from "./view/FormAddUser";

export const AddUser = () => {
  const { formAddUser } = FormAddUser();
  useErrorConnectServer(selectErrorServerUser, "storeUser");

  return (
    <Tile
      title={USERSETTINGS.CREATE_ACCOUNT_TITLE}
      subTitle={USERSETTINGS.CREATE_ACCOUNT_SUBTITLE}
      content={formAddUser}
    />
  );
};

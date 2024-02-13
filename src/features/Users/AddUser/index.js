import { Tile } from "../../../common/Tile";
import { useErrorConnectServer } from "../../../core/hooks/useErrorConnectServer";
import { selectErrorServerUser } from "../../../store/User/sliceUser";
import { FormAddUser } from "./view/FormAddUser";

export const AddUser = () => {
  const { formAddUser } = FormAddUser();
  useErrorConnectServer(selectErrorServerUser, "storeUser");

  return (
    <Tile
      title="Utwórz konto użytkownika"
      subTitle="Po utworzeniu konta, użytkownik będzie mógł się zalogować."
      content={formAddUser}
    />
  );
};

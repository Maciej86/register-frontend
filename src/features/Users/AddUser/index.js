import { Tile } from "../../../common/Tile";
import { FormAddUser } from "./view/FormAddUser";

export const AddUser = () => {
  const { formAddUser } = FormAddUser();

  return (
    <Tile
      title="Utwórz konto użytkownika"
      subTitle="Po utworzeniu konta, użytkownik będzie mógł się zalogować."
      content={formAddUser}
    />
  );
};

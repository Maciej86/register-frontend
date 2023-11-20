import { Tile } from "../../../common/Tile";
import { FormNewUser } from "./view/FormNewUser";

export const AddUser = () => {
  const { formNewUser } = FormNewUser();

  return (
    <Tile
      title="Utwórz konto użytkownika"
      subTitle="Po utworzeniu konta, użytkownik będzie mógł się zalogować."
      content={formNewUser}
    />
  );
};

import { Tile } from "../../../common/Tile";
import { useFormNewUser } from "./view/useFormNewUser";

export const AddUser = () => {
  const { formNewUser } = useFormNewUser();

  return (
    <Tile
      title="Utwórz konto użytkownika"
      subTitle="Po utworzeniu konta, użytkownik będzie mógł się zalogować."
      content={formNewUser}
    />
  );
};

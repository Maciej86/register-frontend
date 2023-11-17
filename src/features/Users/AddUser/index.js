import { Tile } from "../../../common/Tile";
import { useFormCreateUser } from "./view/useFormCreateUser";
import { useTableOrganization } from "./view/useTableOrganization";

export const AddUser = () => {
  const { formCreateUser } = useFormCreateUser();
  const { tableOrganization } = useTableOrganization();

  const contentAddUser = (
    <>
      {formCreateUser}
      {tableOrganization}
    </>
  );

  return (
    <Tile
      title="Utwórz konto użytkownika"
      subTitle="Po utworzeniu konta, użytkownik będzie mógł się zalogować."
      content={contentAddUser}
    />
  );
};

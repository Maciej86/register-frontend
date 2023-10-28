import { useFormEditOrganization } from "./form/useFormEditOrganization";
import { useFormUsersInOrganization } from "./form/useFormUsersInOrganization";
import { TileTwoHalf } from "../../../common/TileTwoHalf";
import { Tile } from "../../../common/Tile";
import { Conteiner } from "./styled";

export const OrganizationEdit = () => {
  const { formEditname } = useFormEditOrganization();
  const { formUserInOrganization } = useFormUsersInOrganization();

  return (
    <Conteiner>
      <TileTwoHalf
        title="Edytuj organizację"
        subTitle="Zmień nazwę organizacji"
        body={formEditname}
      />
      <Tile
        title="Uzytkownicy organizacji"
        subTitle="Zarządzaj użytkownikami organizacji"
        body={formUserInOrganization}
      />
    </Conteiner>
  );
};

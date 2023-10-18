import { useFormEditOrganization } from "./form/useFormEditOrganization";
import { useFormUsersInOrganization } from "./form/useFormUsersInOrganization";
import { TileTwoHalf } from "../../common/TileTwoHalf";
import { Tile } from "../../common/Tile";
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
        title="Uzytkownicy w organizacji"
        subTitle="Zarządzaj użytkownikami przypisanymi do tej organizacji"
        body={formUserInOrganization}
      />
    </Conteiner>
  );
};

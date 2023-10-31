import { useFormAddOrganization } from "./form/useFormAddOrganization";
import { useAllOrganizaton } from "./form/useTableOrganization";
import { TileTwoHalf } from "../../../common/TileTwoHalf";
import { Tile } from "../../../common/Tile";
import { Conteiner } from "./styled";

export const Organization = () => {
  const { formNewOrganization } = useFormAddOrganization();
  const { viewOrganization } = useAllOrganizaton();

  return (
    <Conteiner>
      <TileTwoHalf
        title="Utwórz nową organizację"
        subTitle="Przypisuj utworzone organizacje do użytkowników."
        body={formNewOrganization}
      />
      <Tile
        title="Wszystkie organizacje"
        subTitle="Zarządzaj organizacjami"
        body={viewOrganization}
      />
    </Conteiner>
  );
};

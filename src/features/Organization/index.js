import { TileTwoHalf } from "../../common/TileTwoHalf";
import { Tile } from "../../common/Tile";
import { Conteiner } from "./styled";
import { useFormAddOrganization } from "./form/useFormAddOrganization";

export const Organization = () => {
  const { formNewOrganization } = useFormAddOrganization();

  return (
    <Conteiner>
      <TileTwoHalf
        title="Utwórz nową organizację"
        subTitle="Przypisuj utworzone organizacje do użytkowników."
        body={formNewOrganization}
      />
      <Tile title="Organizacje" subTitle="Zarządzaj organizacjami" />
    </Conteiner>
  );
};

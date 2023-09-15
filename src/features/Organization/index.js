import { useSelector } from "react-redux";
import { selectLoadingAllOrganization } from "../../store/Organization/sliceOrganization";
import { useFormAddOrganization } from "./form/useFormAddOrganization";
import { useAllOrganizaton } from "./checkValue/useAllOrganization";
import { TileTwoHalf } from "../../common/TileTwoHalf";
import { Tile } from "../../common/Tile";
import { Conteiner } from "./styled";
import { Loader } from "../../common/Loader";

export const Organization = () => {
  const loadingOrganization = useSelector(selectLoadingAllOrganization);
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
        title="Organizacje"
        subTitle="Zarządzaj organizacjami"
        body={
          loadingOrganization ? (
            <Loader margin=" 30px auto" />
          ) : (
            viewOrganization
          )
        }
      />
    </Conteiner>
  );
};

import { useSelector } from "react-redux";
import { selectLoadingOneOrganization } from "../../store/Organization/sliceOrganization";
import { useFormEditOrganization } from "./form/useFormEditOrganization";
import { Loader } from "../../common/Loader";
import { TileTwoHalf } from "../../common/TileTwoHalf";
import { Conteiner, ConteinerLoader } from "./styled";

export const OrganizationEdit = () => {
  const loadingOrganization = useSelector(selectLoadingOneOrganization);
  const { formEditname } = useFormEditOrganization();

  return (
    <Conteiner>
      <TileTwoHalf
        title="Edytuj organizację"
        subTitle="Zmień nazwę organizacji"
        body={
          loadingOrganization ? (
            <ConteinerLoader>
              <Loader margin="0" />
            </ConteinerLoader>
          ) : (
            formEditname
          )
        }
      />
    </Conteiner>
  );
};

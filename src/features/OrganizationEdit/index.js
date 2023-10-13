import { useSelector } from "react-redux";
import { useFormEditOrganization } from "./form/useFormEditOrganization";
import { TileTwoHalf } from "../../common/TileTwoHalf";
import { Conteiner } from "./styled";

export const OrganizationEdit = () => {
  const { formEditname } = useFormEditOrganization();

  return (
    <Conteiner>
      <TileTwoHalf
        title="Edytuj organizację"
        subTitle="Zmień nazwę organizacji"
        body={formEditname}
      />
    </Conteiner>
  );
};

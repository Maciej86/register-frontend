import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../../core/hooks/useFetchData";
import { URL_ORGANIZATION } from "../../../../core/urlApi";
import { ORGANIZATION } from "../../../../core/InfoText";
import { selectLoadingEditOrganization } from "../../../../store/Organization/sliceOrganization";
import { Loader } from "../../../../common/Loader";
import { InputText } from "../../../../common/InputText";
import { Button } from "../../../../common/Button";
import { useEditNameOrganization } from "../hooks/useEditNameOrganization";
import { FormArea } from "../styled";
import { LuFileEdit } from "react-icons/lu";

export const FormEditOrganization = () => {
  const { id } = useParams();
  const loadingEditNameOrganization = useSelector(
    selectLoadingEditOrganization
  );

  const {
    editNameOrganization,
    idEditOrganization,
    emptyNameOrganization,
    changeNameOrganization,
  } = useEditNameOrganization();

  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_ORGANIZATION,
    [id],
    { id: parseInt(id) }
  );

  const formEditname = (
    <form onSubmit={changeNameOrganization}>
      <FormArea>
        <InputText
          id="organization"
          placeholder={ORGANIZATION.NEW_ORGANIZATION_PLACEHOLDER}
          label=""
          small={true}
          maxlength="50"
          value={fetchData[0]?.name_organization}
          empty={emptyNameOrganization}
          ref={editNameOrganization}
        />
        <input type="hidden" value={id} ref={idEditOrganization} />
        {loadingEditNameOrganization ? (
          <Loader margin="0 67px" />
        ) : (
          <Button
            text={ORGANIZATION.BUTTON_EDIT_NAME_ORGANIZATION}
            icon={<LuFileEdit size={"15px"} />}
            type="submit"
          />
        )}
      </FormArea>
    </form>
  );

  return { formEditname, fetchData, fetchDataLoading };
};

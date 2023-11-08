import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../../core/hooks/useFetchData";
import { URL_ORGANIZATION } from "../../../../core/urlBackend";
import { ORGANIZATION } from "../../../../core/InfoText";
import { selectLoadingEditOrganization } from "../../../../store/Organization/sliceOrganization";
import { Loader } from "../../../../common/Loader";
import { Button } from "../../../../common/elements/Button";
import { InputText } from "../../../../common/elements/InputText";
import { useEditNameOrganization } from "../checkValue/useEditNameOrganization";
import { ConteinerLoader, FormArea, NotExsist } from "../styled";
import { LuFileEdit } from "react-icons/lu";

export const useFormEditOrganization = () => {
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

  const formEditname = fetchDataLoading ? (
    <ConteinerLoader>
      <Loader margin="0" />
    </ConteinerLoader>
  ) : fetchData.length == 0 ? (
    <NotExsist>Taka organizacja nie istnieje.</NotExsist>
  ) : (
    <form>
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
            action={changeNameOrganization}
          />
        )}
      </FormArea>
    </form>
  );
  return { formEditname };
};
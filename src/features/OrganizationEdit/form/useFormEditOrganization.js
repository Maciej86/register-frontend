import { useParams } from "react-router-dom";
import { useFetchData } from "../../../core/useFetchData";
import { URL_ORGANIZATION } from "../../../core/urlBackend";
import { Loader } from "../../../common/Loader";
import { Button } from "../../../common/elements/Button";
import { InputText } from "../../../common/elements/InputText";
import { ConteinerLoader, FormArea, NotExsist } from "../styled";
import { useEditNameOrganization } from "../checkValue/useEditNameOrganization";
import { LuFileEdit } from "react-icons/lu";
import { useSelector } from "react-redux";
import { selectLoadingEditOrganization } from "../../../store/Organization/sliceOrganization";

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
    <NotExsist>Taka kategoria nie istnieje.</NotExsist>
  ) : (
    <form>
      <FormArea>
        <InputText
          id="organization"
          placeholder="Nazwa organizacji"
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
            text="Zmień nazwę"
            icon={<LuFileEdit size={"15px"} />}
            action={changeNameOrganization}
          />
        )}
      </FormArea>
    </form>
  );
  return { formEditname };
};
